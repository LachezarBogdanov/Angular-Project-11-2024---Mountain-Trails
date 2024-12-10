import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guide, Trail } from '../types';

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

  likeTrail(trailId: string, userId: string) {
    return this.http.put(`/api/like/${trailId}`, {userId});
  }

  getGuides() {
    return this.http.get<Guide[]>(`/api/guides`);
  }

  getOneGuide(guideName: string) {
    return this.http.get<Guide>(`/api/guide/${guideName}`);
  }
}
