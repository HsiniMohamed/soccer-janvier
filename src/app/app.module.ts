import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CupEventComponent } from "./components/cup-event/cup-event.component";
import { ResultComponent } from "./components/result/result.component";
import { NewsComponent } from "./components/news/news.component";
import { StatsComponent } from "./components/stats/stats.component";
import { BlogComponent } from "./components/blog/blog.component";
import { InfoComponent } from "./components/info/info.component";
import { ArticleComponent } from "./components/article/article.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { PlayerComponent } from "./components/player/player.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "./components/admin/admin.component";
import { MatchesTableComponent } from "./components/matches-table/matches-table.component";
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { TeamsTableComponent } from "./components/teams-table/teams-table.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { EditMatchComponent } from "./components/edit-match/edit-match.component";
import { AsterixPipe } from "./pipes/asterix.pipe";
import { SearchMatchesComponent } from "./components/search-matches/search-matches.component";
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from "./components/weather/weather.component";
import { MyFilterPipe } from "./pipes/my-filter.pipe";
import { PlayerFormComponent } from "./components/player-form/player-form.component";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    EditMatchComponent,
    AsterixPipe,
    SearchMatchesComponent,
    WeatherComponent,
    MyFilterPipe,
    PlayerFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
