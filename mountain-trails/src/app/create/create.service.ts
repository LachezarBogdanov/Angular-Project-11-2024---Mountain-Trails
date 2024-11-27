import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient, private router: Router) { }

  create(trailsData: object) {
    console.log(trailsData);
    
    this.http.post(`${API_URL}/create`, trailsData).subscribe((data) => {
      console.log(data);
      
    });
    
    this.router.navigate(['/catalog']);
  }
}
