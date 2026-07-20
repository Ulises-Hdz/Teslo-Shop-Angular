import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.componets';

@Component({
  selector: 'app-home-page',
  imports: [ ProductCardComponent ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
