import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterNavigationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavigationComponent,
    FooterNavigationComponent,
    TimeagoModule
  ]
})
export class SharedModule { }
