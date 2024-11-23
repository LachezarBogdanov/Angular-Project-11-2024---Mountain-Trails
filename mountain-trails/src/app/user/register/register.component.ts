import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('registerForm') form: NgForm | undefined;

  body = {};

  constructor(private userService: UserService){}

  formSubmitHandler() {

    if(this.form?.invalid) {
      return console.log('invalid form');
      
    }
   this.body = this.form?.value;
    
   this.userService.register(this.body);
  }
}
