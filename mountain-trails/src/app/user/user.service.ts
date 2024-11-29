import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  register(body: object) {
      
    this.http.post(`/api/register`, body).subscribe({
      next: () => {
        
          this.router.navigate(['/home']);
          
        
      }, error(err) {
        console.log(err.error.err);
        
      }

    });

  }

  login(body: object) {
    this.http.post('/api/login', body).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      }, error(err) {
        console.log(err.error.err);
        
      }
    })
  }
}
