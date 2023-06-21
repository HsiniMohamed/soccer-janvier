import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
matchForm:FormGroup;
match:any={};
  constructor(private matchService: MatchService,private router :Router) { }

  ngOnInit() {
  }
  addMatch(){
console.log("here match obj",this.match);
this.matchService.addMatch(this.match).subscribe((response)=>{
  console.log("here response from BE",response);
})
this.router.navigate(["admin"])
}

// let matches=JSON.parse(localStorage.getItem("matches")|| "[]");
// let matchId=JSON.parse(localStorage.getItem("idMatch")|| "1");
// this.match.id=matchId
// matches.push(this.match);
// localStorage.setItem("matches",JSON.stringify(matches));
// localStorage.setItem("idMatch",JSON.stringify(matchId+1));
// this.router.navigate(["admin"])
}
