import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  register(body: object) {
      console.log(body);
      
    this.http.post(`${this.apiUrl}/register`, body).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/home']);
  }
}
