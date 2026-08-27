import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.componets';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '@products/interfaces/product.interface';
import { PaginationComponent } from "@shared/components/pagination/pagination.component";
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  products = signal<Product[]>([])
  productService = inject(ProductsService);
  paginationService = inject(PaginationService);
  // activatedRoute = inject(ActivatedRoute);

  // currentPage = toSignal(
  //   this.activatedRoute.queryParamMap.pipe(
  //     map( params => (params.get('page') ? +params.get('page')! : 1)),
  //     map( page => (isNaN(page) ? 1 : page))
  //   ),
  //   {
  //     initialValue: 1
  //   }
  // );

  productsResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() - 1 }),
    stream: ({params}) =>{
      return this.productService.getProducts({
        offset: params.page * 9,
      })
    },
  });

}
