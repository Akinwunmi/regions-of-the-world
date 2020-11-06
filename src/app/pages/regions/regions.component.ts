import { Component, OnInit } from '@angular/core';
// interfaces
import { IRegion } from '../../interfaces/regions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  regions: IRegion;

  constructor() { }

  ngOnInit(): void {
  }

}
