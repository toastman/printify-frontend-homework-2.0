import { Component, Input, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/models/blueprint';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Blueprint;

  constructor() { }

  ngOnInit(): void {
  }

}
