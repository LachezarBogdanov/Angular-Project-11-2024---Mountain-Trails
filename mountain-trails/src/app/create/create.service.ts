import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constants';
import { UserService } from '../user/user.service';
import { User } from '../../types';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  userId: string = '';

  createTrail(trailsData: object) {
    return this.userService.getProfile().pipe(
      switchMap((userData) => {
        const userId = userData._id;
        return this.http.post(`/api/create`, { trailsData, userId });
      })
    );
  }
  
}

