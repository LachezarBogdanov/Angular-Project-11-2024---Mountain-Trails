import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    ) {}
  authLogin() {
    const {email, password} = this.form?.value;

    this.body = {email, password};

    this.userService.login(this.body).subscribe({
      next: () => {
        this.toastr.success('Successful login!')
        this.router.navigate(['/home']); 
      },
      error: (err) => {
        const errorMsg = err.error.err;
        
        this.toastr.error(errorMsg);
      }
    })
}}
