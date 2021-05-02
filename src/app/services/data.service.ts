import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { InewUser } from 'src/app/interfaces/inew-user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loginUrl: string = "https://tritondatabasedeployment.azurewebsites.net/Triton/login";
  private addUserUrl: string = "https://tritondatabasedeployment.azurewebsites.net/Triton/newUser";

  private loginOBJ: Ilogin = {
    Email: "",
    Password: ""
  }
  public newUserOBJ: InewUser = {
    Email: "",
    Password: "",
    ProfilePicture: "",
    StaySignedIn: false
  } 

  constructor(private http: HttpClient, private route:Router) { }

  signIn(loginOBJ){
    console.log(loginOBJ);
    this.http.post(this.loginUrl, loginOBJ).subscribe(data => {
      console.log(data);
      this.setloginOBJ(loginOBJ);
      this.route.navigate(["home"])
    })
  }

  setloginOBJ(object:Ilogin):void{
    this.loginOBJ = object;
  }
  setnewUserOBJ(object:InewUser):void{
    this.newUserOBJ = object;
  }

  getloginOBJ():Ilogin{
    return this.loginOBJ;
  }

  addUser(newUserOBJ){
    console.log(newUserOBJ);
    this.http.post(this.addUserUrl, newUserOBJ).subscribe(data2 => {
      console.log(data2);
      this.setnewUserOBJ(newUserOBJ);
      this.route.navigate(["home"])
    })
  }
}
