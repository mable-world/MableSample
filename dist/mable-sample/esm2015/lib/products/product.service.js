import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productUrl = './api/products/products.json';
    }
    getProducts() {
        return this.http.get(this.productUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getProduct(id) {
        return this.getProducts().pipe(map((products) => products.find(p => p.productId === id)));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
};
ProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductService_Factory() { return new ProductService(i0.ɵɵinject(i1.HttpClient)); }, token: ProductService, providedIn: "root" });
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProductService);
export { ProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFibGUtc2FtcGxlLyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3RzL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU90RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR3pCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsZUFBVSxHQUFHLDhCQUE4QixDQUFDO0lBRVosQ0FBQztJQUV6QyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzVCLEdBQUcsQ0FBQyxDQUFDLFFBQW9CLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQXNCO1FBQ3hDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO1lBQ25DLFlBQVksR0FBRyxzQkFBc0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxRDthQUFNO1lBQ0wsWUFBWSxHQUFHLHlCQUF5QixHQUFHLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7QUE1QlksY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQUkwQixVQUFVO0dBSHpCLGNBQWMsQ0E0QjFCO1NBNUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcHJvZHVjdFVybCA9ICcuL2FwaS9wcm9kdWN0cy9wcm9kdWN0cy5qc29uJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0UHJvZHVjdHMoKTogT2JzZXJ2YWJsZTxJUHJvZHVjdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJUHJvZHVjdFtdPih0aGlzLnByb2R1Y3RVcmwpLnBpcGUoXHJcbiAgICAgIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdBbGw6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJUHJvZHVjdCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdHMoKS5waXBlKFxyXG4gICAgICBtYXAoKHByb2R1Y3RzOiBJUHJvZHVjdFtdKSA9PiBwcm9kdWN0cy5maW5kKHAgPT4gcC5wcm9kdWN0SWQgPT09IGlkKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnIuZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYFNlcnZlciByZXR1cm5lZCBjb2RlOiAke2Vyci5zdGF0dXN9LCBlcnJvciBtZXNzYWdlIGlzOiAke2Vyci5tZXNzYWdlfWA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gIH1cclxufSJdfQ==