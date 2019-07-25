import { OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
export declare class ProductListComponent implements OnInit {
    private productService;
    pageTitle: string;
    imageWidth: number;
    imageMargin: number;
    showImage: boolean;
    errorMessage: string;
    _listFilter: string;
    listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    constructor(productService: ProductService);
    onRatingClicked(message: string): void;
    performFilter(filterBy: string): IProduct[];
    toggleImage(): void;
    ngOnInit(): void;
}
