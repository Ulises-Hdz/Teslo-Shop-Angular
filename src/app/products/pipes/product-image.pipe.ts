import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    
    if (Array.isArray(value)) {
      return value.length > 0 ? `${baseUrl}/files/product/${value[0]}` : './assets/images/no-image.jpg';
    }
    
    // Si es string
    return value ? `${baseUrl}/files/product/${value}` : './assets/images/no-image.jpg';
  }
}
