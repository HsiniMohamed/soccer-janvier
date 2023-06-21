import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
findedPlayer:any;
  constructor() { }

  ngOnInit() {
    let players=JSON.parse(localStorage.getItem("players")||"[]")
    let playerId=localStorage.getItem("idPlayerInfo")
    for (let i = 0; i < players.length; i++) {
     if (players[i].id==playerId) {
      this.findedPlayer=players[i]
      break
     }

    }
  }

}
