import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trail } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTrails(): Observable<Trail[]> {
    return this.http.get<Trail[]>(`${this.url}/catalog`);
  }
}
