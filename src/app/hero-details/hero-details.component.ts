import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Info } from '../models/info';
import { Funkos } from '../models/products';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() card:Info | undefined;
  @Output() close = new EventEmitter<undefined>();
  constructor() { }

  ngOnInit(): void {
  }




}
