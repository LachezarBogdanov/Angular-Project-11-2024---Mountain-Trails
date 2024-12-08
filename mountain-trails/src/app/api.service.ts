import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trail } from '../types';
import { switchMap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTrails() {
    return this.http.get<Trail[]>(`/api/catalog`);
  }

  getOneTrail(id: string) {
    return this.http.get<Trail>(`/api/details/${id}`);
  }

  updateTrail(data: Trail, trailId: string) {
    return this.http.put(`/api/edit/${trailId}`, data);
  }

  deleteTrail(trailId: string) {
    return this.http.delete(`/api/delete/${trailId}`);
  }
}
