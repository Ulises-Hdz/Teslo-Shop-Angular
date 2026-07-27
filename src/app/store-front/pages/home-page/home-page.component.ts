import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.componets';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '@products/interfaces/product.interface';

@Component({
  selector: 'app-home-page',
  imports: [ ProductCardComponent ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  products = signal<Product[]>([])
  productService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({}),
    stream: ({params}) =>{
      return this.productService.getProducts({})
    },
  });

}
