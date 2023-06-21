import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/api/weather";

  constructor(private httpClient: HttpClient) {}

  cityWeather(city: string) {
    return this.httpClient.get<{ result: any }>(`${this.weatherURL}/${city}`);
  }
}
