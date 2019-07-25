import * as tslib_1 from "tslib";
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib_1.__decorate([
        NgModule({
            imports: [
                SharedModule,
                RouterModule.forChild([
                    { path: 'products', component: ProductListComponent },
                    {
                        path: 'products/:id',
                        canActivate: [ProductDetailGuard],
                        component: ProductDetailComponent
                    },
                ]), FormsModule
            ],
            declarations: [
                ProductListComponent,
                ProductDetailComponent
            ],
            exports: [ProductListComponent,
                ProductDetailComponent, RouterModule, FormsModule]
        })
    ], ProductModule);
    return ProductModule;
}());
export { ProductModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYWJsZS1zYW1wbGUvIiwic291cmNlcyI6WyJsaWIvcHJvZHVjdHMvcHJvZHVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFvQjVEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBbkJ6QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFO29CQUNyRDt3QkFDRSxJQUFJLEVBQUUsY0FBYzt3QkFDcEIsV0FBVyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2pDLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO2lCQUNGLENBQUMsRUFBQyxXQUFXO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2dCQUNwQixzQkFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0I7Z0JBQzVCLHNCQUFzQixFQUFDLFlBQVksRUFBQyxXQUFXLENBQUM7U0FDbkQsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsR3VhcmQgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlsLmd1YXJkJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdwcm9kdWN0cycsIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwcm9kdWN0cy86aWQnLFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbUHJvZHVjdERldGFpbEd1YXJkXSxcclxuICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3REZXRhaWxDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgIF0pLEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxyXG4gICAgUHJvZHVjdERldGFpbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1Byb2R1Y3RMaXN0Q29tcG9uZW50LFxyXG4gICAgUHJvZHVjdERldGFpbENvbXBvbmVudCxSb3V0ZXJNb2R1bGUsRm9ybXNNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHsgfSJdfQ==