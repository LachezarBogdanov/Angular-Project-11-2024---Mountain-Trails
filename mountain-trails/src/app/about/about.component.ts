import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutTestService } from './about-test.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(private service: AboutTestService) {}
  ngOnInit(): void {
    const users = this.service.test().subscribe(data => {
      console.log(data);
      
    });

  }
}
