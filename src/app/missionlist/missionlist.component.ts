import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = []
  selectedMission?: Mission
  constructor(private spaceService: SpacexapiService) { }

  ngOnInit(): void {
    this.getMissions()
  }

  getMissions(): void{
    this.missions = this.spaceService.fetchData()
  }

}
