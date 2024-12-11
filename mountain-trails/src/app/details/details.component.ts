import { Component, OnInit } from '@angular/core';
import { Guide, Trail } from '../../types';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user/user.service';
import { catchError, forkJoin, of, tap} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  trail = {} as Trail;
  userId: string = '';
  guideName: string = '';
  trailLikesLength: number = 0;
  hasLiked: boolean = false;
  isOwner: boolean = false;
  guide: Guide | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
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

        if(trail.likes.length > 0) {
          this.trailLikesLength = trail.likes.length;
          const isUserLiked = trail.likes.some(id => id == this.userId);

          if(isUserLiked) {
            this.hasLiked = isUserLiked;
          }
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
          this.guide = data[0];
        }
      }
    })
  }

  deleteHandler(trailId: string) {
    const result = window.confirm('Are you sure you want to delete this trail!');

    if(result) {
      this.apiService.deleteTrail(trailId).subscribe(() => {
        this.toastr.success('Successfuly deleted!')
        this.router.navigate(['/catalog']);
      });
    }
  }

  likeHandler(trailId: string) {
    this.apiService.likeTrail(trailId, this.userId).subscribe({
      next: () => {
        this.apiService.getOneTrail(this.trail._id).subscribe({
          next: (data) => {
            console.log(data);
            
            this.trail = data;
            this.trailLikesLength = data.likes.length;
            this.hasLiked = data.likes.some(id => id === this.userId);
          }
        })
      }
    }) 
  }
}
