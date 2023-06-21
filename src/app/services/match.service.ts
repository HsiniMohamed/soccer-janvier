import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  //declaration de destination du serveur

  matchURL: string = "http://localhost:3000/api/matches";

  //declaration du livreur du service
  constructor(private httpClient: HttpClient) {}

  getAllMatches() {
    return this.httpClient.get<{ matches: any; message: string }>(
      this.matchURL
    );
  }

  getMatchById(id) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
  }

  deletMatch(id) {
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }

  addMatch(matchObj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, matchObj);
  }

  editMatch(newObj) {
    return this.httpClient.put(this.matchURL, newObj);
  }

  searchMatches(scoreOne, scoreTwo) {
    return this.httpClient.get<{ matches: any; message: string }>(
      `${this.matchURL}/${scoreOne}/${scoreTwo}`
    );
  }
}
