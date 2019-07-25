import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product';
export declare class ProductService {
    private http;
    private productUrl;
    constructor(http: HttpClient);
    getProducts(): Observable<IProduct[]>;
    getProduct(id: number): Observable<IProduct | undefined>;
    private handleError;
}
