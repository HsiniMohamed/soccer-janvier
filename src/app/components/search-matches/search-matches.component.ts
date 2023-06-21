import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatchService } from "src/app/services/match.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-search-matches",
  templateUrl: "./search-matches.component.html",
  styleUrls: ["./search-matches.component.css"],
})
export class SearchMatchesComponent implements OnInit {
  searchForm: FormGroup;
  feindedMatches: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      scoreOne: ["", [Validators.required]],
      scoreTwo: ["", [Validators.required]],
    });
  }
  searchMatches() {
    this.matchService
      .searchMatches(
        this.searchForm.value.scoreOne,
        this.searchForm.value.scoreTwo
      )
      .subscribe((response) => {
        this.feindedMatches = response.matches;
        // if (response.matches.length == 0) {
        //   Swal.fire({
        //     title: "There Is No Match With These Scores !!",
        //     showConfirmButton: false,
        //     icon: "warning",
        //   });
        // } else {
        //   this.feindedMatches = response.matches;
        // }
      });
  }
}
