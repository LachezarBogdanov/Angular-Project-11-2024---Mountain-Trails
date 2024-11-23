import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  create(trailsData: object) {
    console.log(trailsData);
    
    this.http.post(`${this.url}/create`, trailsData).subscribe((data) => {
      console.log(data);
      
    });
    
    this.router.navigate(['/catalog']);
  }
}
