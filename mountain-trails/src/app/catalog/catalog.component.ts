import { Component, OnInit } from '@angular/core';
import { Trail } from '../../types';
import { LoaderComponent } from "../shared/loader/loader.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, LoaderComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  trails: Trail[] = [];
  isLoading = false;

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getTrails().subscribe((data: Trail[]) => {
      this.trails = data;
    });
    
    this.isLoading = true;
  }
}
