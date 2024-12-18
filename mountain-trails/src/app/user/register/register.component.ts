import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { matchPasswordsValidator } from '../../utils/match-passwords.validatior';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required])
    },
    {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }),
  })

  body = {};

  constructor(
    private route: Router,
    private userService: UserService,
    private toastr: ToastrService,
    ){}

  get passGroup() {
    return this.form.get('passGroup');
  }

  formSubmitHandler() {

    if(this.form?.invalid) {
      return console.log('invalid form');
      
    }
    
   this.body = this.form?.value;
    
    this.userService.register(this.body).subscribe({
      next: () => {
        this.toastr.success('Successful register!')
      this.route.navigate(['/home']);
      },
      error: (err) => {
        const errorMsg = err.error.err;

        this.toastr.error(errorMsg);
      }
    });
  }
}
