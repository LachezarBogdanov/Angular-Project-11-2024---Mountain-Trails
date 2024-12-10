import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Guide } from '../../types';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  guides: Guide[] = [];

    constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGuides().subscribe((data) => {
      this.guides = data;
    })
  }
}
