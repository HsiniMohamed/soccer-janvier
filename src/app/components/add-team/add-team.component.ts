import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm:FormGroup;
  team:any={};

  constructor() { }

  ngOnInit() {
  }
addTeam(){
let teams=JSON.parse(localStorage.getItem("teams")|| "[]");
let teamId=JSON.parse(localStorage.getItem("idTeam")|| "1");
this.team.id=teamId
teams.push(this.team);
localStorage.setItem("teams",JSON.stringify(teams));
localStorage.setItem("idTeam",JSON.stringify(teamId+1));
  }
}
