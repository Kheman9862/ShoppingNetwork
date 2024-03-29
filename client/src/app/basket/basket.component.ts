import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  basketTotals$: Observable<IBasketTotals>;
  //'id','brand', 'pictureUrl', 'price', 'productName','quantity','type'
  displayedColumns: string[] = [
    'product',
    'price',
    'quantity',
    'total',
    'remove',
  ];

  dataSource = new MatTableDataSource();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.basket$.subscribe((data) => {
      this.dataSource.data = data?.items;
    });
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotal$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }
}
