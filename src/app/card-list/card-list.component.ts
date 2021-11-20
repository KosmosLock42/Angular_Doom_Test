import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../models/info';
import { Funkos } from '../models/products';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() cards!:Info[];
  @Output() dadTalk= new EventEmitter<Info>();
 

  constructor() { }

  ngOnInit(): void {
  }


}
