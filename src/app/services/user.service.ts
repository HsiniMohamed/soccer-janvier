import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userURL: string = "http://localhost:3000/api/users";
  constructor(private httpClient: HttpClient) {}

  login(user) {
    return this.httpClient.post<{ user: any; msg: string }>(
      this.userURL + "/login",
      user
    );
  }

  signup(userObj: any, avatar: File) {
    let formData = new FormData();
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("pwd", userObj.pwd);
    formData.append("avatar", avatar);

    return this.httpClient.post(this.userURL + "/signup", formData);
  }
  getUserByEmail(email) {
    return this.httpClient.get<{ user: any }>(`${this.userURL}/${email}`);
  }
  editProfile(newUser) {
    return this.httpClient.put<{ msg: string }>(this.userURL, newUser);
  }
}
