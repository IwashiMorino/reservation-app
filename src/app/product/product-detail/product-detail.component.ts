import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  product: { coverimage: string; name: string; price: number; description: string; heading1: string; heading2: string; heading3: string; headingtext1: string; headingtext2: string; headingtext3: string; } | undefined;
  // product: { name: string; price: number; description: string; } | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // this.product = products.find(product => product.id === productIdFromRoute);
    this.product = products[productIdFromRoute];

  }

  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     this.product = products[+params.get('productId')];
  //   });
  // }

}
