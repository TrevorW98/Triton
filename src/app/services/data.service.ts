import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = "https://tritondatabasedeployment.azurewebsites.net/Triton/login";

  private userOBJ: Ilogin = {
    Email: "",
    Password: ""
  }

  constructor(private http: HttpClient, private route:Router) { }

  signIn(loginOBJ){
    console.log(loginOBJ);
    this.http.post(this.url, loginOBJ).subscribe(data => {
      console.log(data);
      this.setOBJ(loginOBJ);
      this.route.navigate(["home"])
    })
  }

  setOBJ(object:Ilogin):void{
    this.userOBJ = object;
  }

  getOBJ():Ilogin{
    return this.userOBJ;
  }
}
