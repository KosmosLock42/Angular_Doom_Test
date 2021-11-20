import { Component, OnInit } from '@angular/core';
import { Info } from '../models/info';
import { Funkos } from '../models/products';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  puppets: Info[] = Funkos;
  switcher: Info | undefined; 

  constructor() {}

  ngOnInit(): void {}

  Message(card: Info) {
    this.switcher = card;
  }

  tabClose(){
    this.switcher = undefined;
  }

}
