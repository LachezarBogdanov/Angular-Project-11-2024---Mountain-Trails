import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTrails() {
    return this.http.get(`${this.url}/catalog`).subscribe((data) => {
      console.log(data);
      
    });
  }
}
