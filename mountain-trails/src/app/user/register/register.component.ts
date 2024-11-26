import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

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

  constructor(private route: Router, private userService: UserService){}

  formSubmitHandler() {

    if(this.form?.invalid) {
      return console.log('invalid form');
      
    }
   this.body = this.form?.value;
    const {username, email, password} = this.form?.value;
    
   try{
     this.userService.register({username, email, password});

    this.route.navigate(['/home']);
   } catch(err) {
    console.log(err);
    
   }
  }
}
