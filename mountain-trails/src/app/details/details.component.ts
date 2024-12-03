import { Component, OnInit } from '@angular/core';
import { Trail } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  trail = {} as Trail;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['trailId'];

    
    this.apiService.getOneTrail(id).subscribe((data: Trail) => {
            
      this.trail = data;    
    })
  }
}
