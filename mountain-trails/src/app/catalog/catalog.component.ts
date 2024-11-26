import { Component, OnInit } from '@angular/core';
import { Trail } from '../../types';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  trails: Trail[] = [];
  isLoading = false;

  constructor(private catalogService: CatalogService){}

  ngOnInit(){
    this.catalogService.getTrails().subscribe((data: Trail[]) => {
      console.log(data);
      
      this.trails = data;
    });
    
    this.isLoading = true;
  }
}
