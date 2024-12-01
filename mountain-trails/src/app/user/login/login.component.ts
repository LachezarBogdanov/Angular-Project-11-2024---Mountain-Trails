import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;
  
  body = {};

  constructor(private userService: UserService, private router: Router) {}
  authLogin() {
    const {email, password} = this.form?.value;

    this.body = {email, password};

    this.userService.login(this.body).subscribe(() => {
          this.router.navigate(['/home']); 
  })
}}
