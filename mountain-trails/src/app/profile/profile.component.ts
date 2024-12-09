import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Trail, User } from '../../types';
import { catchError, forkJoin, of } from 'rxjs';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: User | null = null;
  allTrails: Trail[] = [];

  constructor(private userService: UserService, private apiService: ApiService) {}

  ngOnInit(): void {

    forkJoin({
      profile: this.userService.getProfile().pipe(
        catchError(() => of(null)) 
      ),
      trails: this.apiService.getTrails()
    }).subscribe({
      next: ({profile, trails}) => {
        console.log(profile);
        
        this.profile = profile;
        this.allTrails = trails;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

