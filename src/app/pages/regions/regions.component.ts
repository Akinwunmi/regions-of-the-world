import { Component, OnInit } from '@angular/core';
// interfaces
import { ICountry } from '../../interfaces/regions';
// services
import { RegionService } from "../../services/region.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  countries: ICountry[] = [];

  errorMessage: string;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.getCountries().subscribe({
      next: countries => {
        this.countries = countries;
      },
      error: err => this.errorMessage = err
    });
  }
}
