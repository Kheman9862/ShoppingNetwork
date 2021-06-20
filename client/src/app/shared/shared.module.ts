import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OrderTotalsComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  exports: [OrderTotalsComponent],
})
export class SharedModule {}
