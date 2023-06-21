import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./../../services/weather.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weatherResult: any;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city: ["", [Validators.required]],
    });
  }
  searchWeather() {
    this.weatherService
      .cityWeather(this.weatherForm.value.city)
      .subscribe((response) => {
        console.log("response", response.result);
        this.weatherResult = response.result;
      });
  }
}
