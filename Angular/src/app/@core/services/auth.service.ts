import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/users';

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData: LoginDTO) : Observable<any> {

       const user: User = {
        name: 'Paolino',
      surname: 'Paperino',
      username: 'papero123'
    }
    return of(user);
    // Fine stub 
  }
    
 /*    console.log('auth service.ts', loginData);

    const url = `${this.springBootUrl}/login`; // Sostituisci con il tuo endpoint effettivo per il login
    return this.http.post(url, loginData);

    const user = loginData;

     */

   

    // Passare username e password
    // return this.http.get(${this.springBootUrl}/api/user);

    // Stub prima di implementare l'API
 /*      const user: User = {
        name: 'Paolino',
      surname: 'Paperino',
      username: 'papero123'
    }
    return of(user);
    // Fine stub 
  } */

  register(registerData: RegisterDTO) {
    console.log('auth service.ts', registerData);

    const url = `${this.springBootUrl}/`; // Sostituisci con il tuo endpoint effettivo per il login
    return this.http.post(url, registerData);


    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    //this.router.navigateByUrl("/");
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }
}