import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  //declaration de destination du serveur

  playerURL: string = "http://localhost:3000/api/players";

  //declaration du livreur du service
  constructor(private httpClient: HttpClient) {}

  getAllPlayers() {
    return this.httpClient.get<{ playersTab: any }>(this.playerURL);
  }

  getPlayerById(id) {
    return this.httpClient.get<{ player: any }>(`${this.playerURL}/${id}`);
  }

  deletPlayer(id) {
    return this.httpClient.delete<{ isDeleted: boolean }>(
      `${this.playerURL}/${id}`
    );
  }

  addPlayer(playerObj) {
    return this.httpClient.post<{ msg: string }>(this.playerURL, playerObj);
  }

  editPlayer(playerObj) {
    return this.httpClient.put<{ msg: string }>(this.playerURL, playerObj);
  }
}
