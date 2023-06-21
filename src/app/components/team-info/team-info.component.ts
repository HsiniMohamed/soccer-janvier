import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
findedTeam:any;
  constructor() { }

  ngOnInit() {
    let teams=JSON.parse(localStorage.getItem("teams"||"[]"))
    let id=localStorage.getItem("idTeamInfo");
    for (let i = 0; i < teams.length; i++) {
     if (teams[i].id==id) {
    this.findedTeam=teams[i];
    break;
     }

    }
  }

}
