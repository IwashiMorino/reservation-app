import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        // return products
        return this.http.get('/api/v1/products')
    }

    getProductByID(productId: string): Observable<any> {
        // return products[productId]
        return this.http.get('/api/v1/products/' + productId)
    }
}