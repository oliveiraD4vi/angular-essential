import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: null as any
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSave(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  onCancel(): void {
    this.router.navigate(['/products'])
  }
}
