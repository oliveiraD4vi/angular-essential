import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

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

  onUpdate(): void {

  }

  onCancel(): void {
    this.router.navigate(['/products'])
  }

}
