import * as tslib_1 from "tslib";
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
let ProductModule = class ProductModule {
};
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
export { ProductModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYWJsZS1zYW1wbGUvIiwic291cmNlcyI6WyJsaWIvcHJvZHVjdHMvcHJvZHVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFvQjVELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7Q0FBSSxDQUFBO0FBQWpCLGFBQWE7SUFuQnpCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFO2dCQUNyRDtvQkFDRSxJQUFJLEVBQUUsY0FBYztvQkFDcEIsV0FBVyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2pDLFNBQVMsRUFBRSxzQkFBc0I7aUJBQ2xDO2FBQ0YsQ0FBQyxFQUFDLFdBQVc7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNaLG9CQUFvQjtZQUNwQixzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0I7WUFDNUIsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLFdBQVcsQ0FBQztLQUNuRCxDQUFDO0dBQ1csYUFBYSxDQUFJO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZHVjdERldGFpbEd1YXJkIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbC5ndWFyZCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAncHJvZHVjdHMnLCBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncHJvZHVjdHMvOmlkJyxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW1Byb2R1Y3REZXRhaWxHdWFyZF0sXHJcbiAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICBdKSxGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcclxuICAgIFByb2R1Y3REZXRhaWxDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCxcclxuICAgIFByb2R1Y3REZXRhaWxDb21wb25lbnQsUm91dGVyTW9kdWxlLEZvcm1zTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7IH0iXX0=