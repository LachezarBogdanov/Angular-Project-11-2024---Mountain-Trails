import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from './create.service';
import { ToastrService } from 'ngx-toastr';
import { ImageDirective } from '../directives/image.directive';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ImageDirective],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('createForm') form: NgForm | undefined;

  trail = {};

  constructor(
    private router: Router,
     private createService: CreateService,
     private toastr: ToastrService
    ){}

  createSubmitHandler() {

    if(this.form?.invalid) {
      return console.log('invalid form');  
    }

    this.trail = this.form?.value;
    
    this.createService.createTrail(this.trail).subscribe({
      next: () => {
        this.toastr.success('Successfully created!')
        this.router.navigate(['/catalog']);
      }
    });
   
  }
}
