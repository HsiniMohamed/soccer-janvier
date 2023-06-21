import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any=[
{name:"Messi",number:30,position:"RF || CF || CAM",img:"assets/images/img_1.jpg"},
{name:"Ronaldo",number:7,position:"LF || LW || CF || ST",img:"assets/images/img_2.jpg"}
]
  constructor() { }

  ngOnInit() {
  }

}
