import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutTestService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  test() {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }
}
