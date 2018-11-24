import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WOW } from 'wowjs/dist/wow.min';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 40.189483;
  lng: number = 44.521691;
  zoom:number = 8;
  constructor() { }

  ngOnInit() {
   
  }

}
