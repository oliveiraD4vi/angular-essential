import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null as any
  }
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.productService.readById(id || '').subscribe((product) => {
      this.product = product
    })
  }

  onDelete(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.productService.delete(id || '').subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  onCancel(): void {
    this.router.navigate(['/products'])
  }

}
