import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../models/info';
import { Funkos } from '../models/products';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

@Input() funkos?: Info;

  constructor() { }

  ngOnInit(): void {
  }

}
