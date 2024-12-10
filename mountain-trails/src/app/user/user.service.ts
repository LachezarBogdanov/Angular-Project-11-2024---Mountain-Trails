import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  user: User | null = null;
  userSubscription : Subscription | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(body: object) {
    return this.http.post<User>(`/api/register`, body).pipe(tap((user) => this.user$$.next(user)));
  }

  login(body: object) {
    return this.http.post<User>('/api/login', body).pipe(tap((user) => this.user$$.next(user)))
  }

  logout() {
    return this.http.post('/api/logout', {})
        .pipe(tap(() => this.user$$.next(null)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(userId: string, data: object) {
    return this.http.put(`/api/profile/edit/${userId}`, {data});
  }
}
