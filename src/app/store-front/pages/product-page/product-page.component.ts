import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  productIdSlug: string = this.activateRoute.snapshot.params['idSlug']
  productService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({idSlug: this.productIdSlug}),
    stream: ({params}) => {
      // this.router.navigate(['/product', params.idSlug]);
      return this.productService.getProductByIdSlug(params.idSlug); 
    },
  });
}
