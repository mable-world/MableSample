import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MableSampleComponent = /** @class */ (function () {
    function MableSampleComponent() {
        this.pageTitle = ' Neha Product Mangement';
    }
    MableSampleComponent.prototype.ngOnInit = function () {
    };
    MableSampleComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-MableSample',
            template: "<!----<ng-content></ng-content>-->\r\n    <nav class='navbar navbar-expand navbar-light bg-light'>\r\n    <a class='navbar-brand'>{{pageTitle}}</a>\r\n    <ul class='nav nav-pills'>\r\n      <li><a class='nav-link' [routerLink]=\"['/welcome']\">Home</a></li>\r\n      <li><a class='nav-link' [routerLink]=\"['/products']\">Product List</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div class='container'>\r\n    <router-outlet></router-outlet>\r\n  </div>"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MableSampleComponent);
    return MableSampleComponent;
}());
export { MableSampleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFibGUtc2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hYmxlLXNhbXBsZS8iLCJzb3VyY2VzIjpbImxpYi9tYWJsZS1zYW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xEO0lBRUU7UUFEQSxjQUFTLEdBQVUseUJBQXlCLENBQUM7SUFDN0IsQ0FBQztJQUVqQix1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLDZjQUEyQztTQUU1QyxDQUFDOztPQUNXLG9CQUFvQixDQU9oQztJQUFELDJCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLU1hYmxlU2FtcGxlJyxcbiAgdGVtcGxhdGVVcmw6Jy4vbWFibGUtc2FtcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNYWJsZVNhbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nIE5laGEgUHJvZHVjdCBNYW5nZW1lbnQnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==