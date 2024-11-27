import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  register(body: object) {
      
    this.http.post(`${API_URL}/register`, body).subscribe((data) => {
      const token = data;

      console.log(token);
      
    });

    this.router.navigate(['/home']);
  }
}
