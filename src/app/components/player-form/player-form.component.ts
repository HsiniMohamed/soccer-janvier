import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
  styleUrls: ["./player-form.component.css"],
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  id: any;
  tittle: string = "Add Player";
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.tittle = "Edit Player";
      this.playerService.getPlayerById(this.id).subscribe((response) => {
        this.player = response.player;
      });
    }
  }

  addPlayer() {
    console.log("here", this.player);
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe((response) => {
        this.router.navigate(["admin"]);
      });
    } else {
      this.playerService.addPlayer(this.player).subscribe((response) => {
        console.log("here response from BE", response);
        this.router.navigate(["admin"]);
      });
    }
  }
}
