import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  missions : any
  mission : Mission[] = []

  private api = 'https://api.spacexdata.com/v3/launches'

  constructor(private http : HttpClient) { }

  rawData() : Observable<Object>{
    return this.http.get(this.api);
  }

  fetchData(){
    this.missions = this.rawData()
    return this.viewMissionsData()
  }

  viewMissionsData() : Mission[]{
    this.missions.forEach((element:any) => {
      element.forEach((data : any) => {
        const { flight_number, mission_name, launch_year, details, links, rocket , launch_site } = data
        const mission_patch_small: string = links.mission_patch_small
        const m: Mission = { flight_number, mission_name, launch_year, details, mission_patch_small , rocket , launch_site , links}
        this.mission.push(m)
      })
    });
    return this.mission;
  }

  findMission(id : Number) : any{
    const allMissions = this.fetchData()
    return allMissions.find(mission => mission.flight_number == id)
  }
}
