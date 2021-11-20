import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../models/info';
import { Funkos } from '../models/products';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

 @Input() hero!: Info;
 @Output() btn = new EventEmitter<Info>();

  constructor() { }

  ngOnInit(): void {
  }


}
