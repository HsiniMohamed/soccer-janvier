import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teamsTab:any=[]
  constructor(private router:Router ) { }

  ngOnInit() {
this.teamsTab=JSON.parse(localStorage.getItem("teams"||"[]"))
  }
  deleteTeam(id){
for (let i = 0; i < this.teamsTab.length; i++) {
if (this.teamsTab[i].id==id) {
  this.teamsTab.splice(i,1)
  break
}
}
localStorage.setItem("teams",JSON.stringify(this.teamsTab))
  }
  goToTeamInfo(id){
    localStorage.setItem("idTeamInfo",id)
    this.router.navigate(["team-info"])
  }
}
