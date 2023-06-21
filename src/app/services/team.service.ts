import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
//declaration de destination du serveur

teamURL:string="http//localhost:3000/api/teams";

//declaration du livreur du service
  constructor(private httpClient:HttpClient) { }


  getAllPlayeres(){
    return this.httpClient.get(this.teamURL)
  }

  getPlayerById(id){
    return this.httpClient.get(`${this.teamURL}/${id}`)
  }

  deletPlayer(id){
    return this.httpClient.delete(`${this.teamURL}/${id}`)
  }

  addPlayer(playerObj){
    return this.httpClient.post(this.teamURL,playerObj)
  }
}
