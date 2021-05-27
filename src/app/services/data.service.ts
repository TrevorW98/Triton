import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from 'src/app/interfaces/ILogin';
import { ILoginResponse } from 'src/app/interfaces/ILoginResponse';
import { IUser } from 'src/app/interfaces/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //LIVE
  //private baseUrl: string = "https://tritondatabasedeployment.azurewebsites.net";
  //DEV
  private baseUrl: string = "http://localhost:5000";


  private loginUrl: string = this.baseUrl + '/auth/login';
  private addUserUrl: string = this.baseUrl + '/auth/newUser';

  private login: ILogin = {
    Email: '',
    Password: '',
  };
  public User: IUser = {
    Id: 0,
    Email: '',
    ProfilePicture: '',
    StaySignedIn: false,
  };

  constructor(private http: HttpClient, private route: Router) {}

  signIn(login) {
    console.log(login);
    this.http.post(this.loginUrl, login).subscribe((response: ILoginResponse) => {
      //this.setLogin(login);
      console.log(response);
      this.setUser(response.user);
      console.log(this.User, response.user);
      this.route.navigate(['home']);
    });
  }

  setLogin(login: ILogin): void {
    this.login = login;
  }
  setUser(user: IUser): void {
    console.log("Setting user...");
    this.User = user;
  }

  getlogin(): ILogin {
    return this.login;
  }

  addUser(user) {
    console.log(user);
    this.http.post(this.addUserUrl, user).subscribe((data2) => {
      console.log(data2);
      this.setUser(user);
      this.route.navigate(['home']);
    });
  }
}
