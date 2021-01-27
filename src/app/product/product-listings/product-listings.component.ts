import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})


export class ProductListingsComponent implements OnInit {

  products: any;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {

    const productObservable = this.ProductService.getProducts();

    productObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) }

    )

  }

}
