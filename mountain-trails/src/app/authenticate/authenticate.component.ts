import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from "../shared/loader/loader.component";

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (data) => {
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