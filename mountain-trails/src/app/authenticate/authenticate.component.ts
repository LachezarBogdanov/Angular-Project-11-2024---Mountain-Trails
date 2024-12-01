import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (data) => {
        console.log(data);
        
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
        this.router.navigate(['/login']);
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    })
}
}