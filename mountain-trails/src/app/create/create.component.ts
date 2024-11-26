import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('createForm') form: NgForm | undefined;

  trail = {};

  constructor(private route: Router, private createService: CreateService){}

  createSubmitHandler() {

    if(this.form?.invalid) {
      return console.log('invalid form');  
    }

    this.trail = this.form?.value;
    
    try{
      this.createService.create(this.trail);
      
      this.route.navigate(['/catalog']);
    } catch(err) {
      console.log(err);
      
    }
  }
}
