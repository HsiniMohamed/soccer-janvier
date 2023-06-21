import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  playersTab: any = [];
  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit() {
    this.getAll();
  }
  deletePlayer(id) {
    this.playerService.deletPlayer(id).subscribe((response) => {
      if (response.isDeleted) {
        this.getAll();
      } else {
        Swal.fire({
          title: "Not deleted !!",
          showConfirmButton: false,
          icon: "warning",
        });
      }
    });
  }
  goToPlayerInfo(id) {
    localStorage.setItem("idPlayerInfo", id);
    this.router.navigate(["player-info"]);
  }
  goToPlayerEdit(id) {
    this.router.navigate([`edit-player/${id}`]);
  }
  getAll() {
    this.playerService.getAllPlayers().subscribe((response) => {
      this.playersTab = response.playersTab;
    });
  }
}
