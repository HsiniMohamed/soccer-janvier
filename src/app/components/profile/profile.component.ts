import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userEmail: string;
  userProfile: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      pwd: [""],
    });
    this.userEmail = this.activatedRoute.snapshot.paramMap.get("email");
    this.userService.getUserByEmail(this.userEmail).subscribe((response) => {
      console.log("response from BE ", response);
      this.userProfile = response.user;
    });
  }
  editProfile() {
    this.userService.editProfile(this.userProfile).subscribe((response) => {
      console.log("response from BE ", response);
    });
  }
}
