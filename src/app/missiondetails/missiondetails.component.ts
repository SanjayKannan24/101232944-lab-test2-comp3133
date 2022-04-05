import { Component, Input, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() mission?: Mission
  
  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexapiService,
    private loc: Location) { }

  ngOnInit(): void {
    this.getMission()
  }

  getMission() : void{
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null) {
      this.mission = this.spacexService.findMission(Number(id))
    }
  }

  

}
