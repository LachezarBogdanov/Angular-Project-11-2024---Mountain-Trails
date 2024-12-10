import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../../types';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit{
  @ViewChild('createForm') form: NgForm | undefined;
  user = {} as User;
  userId: string = '';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (data) => {
        this.userId = data._id;
        this.user = data;
      }
    })
  }

  editProfileSubmitHandler() {
    const formsData = this.form?.value;

    this.userService.updateProfile(this.userId, formsData).subscribe({
      next: () => {
        this.toastr.success('Successfully edited profile!')
        this.router.navigate(['/profile']);
      }
    })
    
  }
}
