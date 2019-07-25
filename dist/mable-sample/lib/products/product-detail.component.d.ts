import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
export declare class ProductDetailComponent implements OnInit {
    private route;
    private router;
    private productService;
    pageTitle: string;
    errorMessage: string;
    product: IProduct | undefined;
    constructor(route: ActivatedRoute, router: Router, productService: ProductService);
    ngOnInit(): void;
    getProduct(id: number): void;
    onBack(): void;
}
