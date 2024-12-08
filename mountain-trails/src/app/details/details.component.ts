import { Component, OnInit } from '@angular/core';
import { Trail } from '../../types';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';
import { catchError, forkJoin, of, tap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  trail = {} as Trail;
  userId = '';
  isOwner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['trailId'];

    forkJoin({
      user: this.userService.getProfile().pipe(
        catchError(() => of(null))  // If an error occurs (user not logged in), return null
      ),
      trail: this.apiService.getOneTrail(id)
    }).subscribe({
      next: ({ user, trail }) => {
        this.trail = trail;

        if (user) {
          this.userId = user._id;  // If user is logged in, set the userId
          this.isOwner = this.userId === this.trail.owner;
        } else {
          this.userId = '';  // If no user, set userId to empty
          this.isOwner = false;  // Ensure isOwner is false if not logged in
        }
      },
      error: (err) => {
        // Handle errors that might occur during the API calls
        console.error('Error fetching data:', err);
      }
    });
    
  }

  deleteHandler(trailId: string) {
    this.apiService.deleteTrail(trailId).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
}
