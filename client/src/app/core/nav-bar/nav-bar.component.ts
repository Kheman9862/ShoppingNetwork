import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  // currentUser$: Observable<IUser>;

  constructor(private basketService: BasketService) // ,
  // private accountService: AccountService
  {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    // this.currentUser$ = this.accountService.currentUser$;
  }

  // logout() {
  //   this.accountService.logout();
  // }
}
