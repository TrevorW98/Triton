import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ILogin } from 'src/app/interfaces/ILogin';
import { ILoginResponse } from 'src/app/interfaces/ILoginResponse';
import { IUser } from 'src/app/interfaces/IUser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IAnimals } from '../interfaces/animals';
import { IndexService } from './index.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  //LIVE
  // private baseUrl: string = "https://tritondatabasedeployment.azurewebsites.net";
  //DEV
  public data: any;
  private baseUrl: string = "http://localhost:5000";


  private loginUrl: string = this.baseUrl + '/auth/login';
  private addUserUrl: string = this.baseUrl + '/auth/newUser';
  private updateUserUrl: string = this.baseUrl + '/auth/update';

  private login: ILogin = {
    Email: '',
    Password: '',
  };

  public User: IUser = {
    id: 0,
    email: '',
    profilePicture: '',
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

  getUser(): IUser{
    return this.User;
  }

  addUser(user) {
    console.log(user);
    this.http.post(this.addUserUrl, user).subscribe((data2) => {
      console.log(data2);
      this.setUser(user);
      this.route.navigate(['home']);
    });
  }

  updateUser() {
    console.log("sending photo...");
    this.http.put(this.updateUserUrl, this.User).subscribe(response => {console.log(response)});
  }

    // This our POST Function.
  // Every POST thats gets called will use this function to call the api.
  public post(route: string, item: any, optionalMsg?: string): any {

    return this.http.post(this.baseUrl + route, item)
      // THE PIPE LETS YOU COMBIME MULTIPLE FUNTIONS INTO ONE FUNCTION 
      .pipe(

        // Map is going through all items returned and stored in this.data variable.
        map(res => this.data = res),

        // ALLOW US TO TAP INTO THE OBSERVABLE TO BE ABLE CHECK FOR SUCCESS / FAILED ATTEMPT THEN DETERMINES HOW TO HANDLE IT. 
        tap((res: any) => this.handleSuccess(res, null)),
        catchError(err => this.handleError(err)),
      );
  }
  private handleSuccess(res: any, optionalMsg?: any) {
    if (optionalMsg) {
      //this.toastService.showSuccess('Success', optionalMsg);
    }
  }

  private handleError(err: HttpErrorResponse, isLogin?: boolean) {
    let message: string = "";
    let routing = '';
    if (err.status === 401) {
      message = !isLogin ? 'Unauthorized' : '';
      routing = !isLogin ? 'sign-in' : '';
    } else if (err.status === 403) {
      message = 'Forbidden';
      routing = 'login';
    } else if (err.status === 404) {
      routing = 'notfound';
    } else {
      message = (err.error && typeof err.error === 'string') ? err.error : err.error.Message ? err.error.Message
        : err.message ? err.message : 'Ooops! Something went wrong!';
    }
    if (routing) {
      // this.router.navigate([route]);
      this.route.navigate([routing]);
    }
    if (message) {
      // this.toastService.showError('Error!', message);
    }
    return of(message);
  }

  

  
}
