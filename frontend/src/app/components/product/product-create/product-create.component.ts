import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSave(): void {
    this.productService.showMessage('Operação executada com sucesso!')
  }

  onCancel(): void {
    this.router.navigate(['/products'])
  }
}
