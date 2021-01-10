import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  product: { coverimage: string; name: string; price: number; description: string; heading1: string; heading2: string; heading3: string; headingtext1: string; headingtext2: string; headingtext3: string; } | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
  
    this.route.paramMap.subscribe(routeParams => {
      
      if (productIdFromRoute != null) {
        const productObservable = this.productService.getProductByID(productIdFromRoute);

        productObservable.subscribe(
          (data) => {
            this.product = data
          },
          (err) => {
  
          }
        )
      }
      
    });
  }

}
