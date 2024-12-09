import { Component, OnInit } from '@angular/core';
import { Guide, Trail } from '../../types';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';
import { catchError, forkJoin, of, tap} from 'rxjs';

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
  guideName = '';
  isOwner: boolean = false;
  guide: Guide | null = null;

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
        catchError(() => of(null)) 
      ),
      trail: this.apiService.getOneTrail(id)
    }).subscribe({
      next: ({ user, trail }) => {
        this.trail = trail;
        this.guideName = trail.guide;

        if (user) {
          this.userId = user._id;
          this.isOwner = this.userId === this.trail.owner;
        } else {
          this.userId = '';
          this.isOwner = false; 
        }

        this.getOneGuide(trail.guide)
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
    
  }

  getOneGuide(guideName: string) {
    this.apiService.getOneGuide(guideName).subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.guide = data[0]; // Get the first object from the array
        } else {
          console.error('No guides found or data is not an array');
        }
        console.log(data); // Check the data structure
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteHandler(trailId: string) {
    this.apiService.deleteTrail(trailId).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
}
