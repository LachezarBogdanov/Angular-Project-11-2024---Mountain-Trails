import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  constructor(private catalogService: CatalogService){}

  ngOnInit(): void {
    this.getTrails();
  }

  getTrails() {
    const allTrails = this.catalogService.getTrails();
  }
}
