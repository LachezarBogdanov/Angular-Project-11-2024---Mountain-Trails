import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trail } from '../../types';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getTrails() {
    return this.http.get<Trail[]>(`${API_URL}/catalog`);
  }
}
