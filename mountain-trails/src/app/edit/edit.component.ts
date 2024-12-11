import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Trail } from '../../types';
import { ImageDirective } from '../directives/image.directive';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ImageDirective],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  trail = {} as Trail;
  trailId = '';
  @ViewChild('editForm') form: NgForm | undefined;

  constructor(
    private route: ActivatedRoute,
     private apiService: ApiService,
      private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['trailId'];
    this.trailId = id;
        
    this.apiService.getOneTrail(id).subscribe((data) => {
      this.trail = data;      
    });
    
  }

  editSubmitHandler() {
    const data = this.form?.value;

    this.apiService.updateTrail(data, this.trailId).subscribe((data) => {
      this.router.navigate([`/details/${this.trailId}`]);
    })

  }
}
