import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCarouselModule, FlexLayoutModule],
  exports: [HomeComponent],
})
export class HomeModule {}
