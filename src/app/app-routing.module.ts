import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { EditMatchComponent } from "./components/edit-match/edit-match.component";
import { SearchMatchesComponent } from "./components/search-matches/search-matches.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { PlayerFormComponent } from "./components/player-form/player-form.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "allMatches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "admin", component: AdminComponent },
  { path: "match-info", component: MatchInfoComponent },
  { path: "player-info", component: PlayerInfoComponent },
  { path: "team-info", component: TeamInfoComponent },
  { path: "edit-match/:id", component: EditMatchComponent },
  { path: "search-matches", component: SearchMatchesComponent },
  { path: "weather", component: WeatherComponent },
  { path: "add-player", component: PlayerFormComponent },
  { path: "edit-player/:id", component: PlayerFormComponent },
  { path: "profile/:email", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
