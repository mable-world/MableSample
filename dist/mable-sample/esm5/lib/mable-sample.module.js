import * as tslib_1 from "tslib";
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MableSampleComponent } from './mable-sample.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
var MableSampleModule = /** @class */ (function () {
    function MableSampleModule() {
    }
    MableSampleModule = tslib_1.__decorate([
        NgModule({
            declarations: [MableSampleComponent,
                WelcomeComponent],
            imports: [BrowserModule,
                HttpClientModule,
                RouterModule,
                RouterModule.forRoot([
                    { path: 'welcome', component: WelcomeComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),
                ProductModule,
                AppRoutingModule
            ],
            exports: [MableSampleComponent, ProductModule, WelcomeComponent]
        })
    ], MableSampleModule);
    return MableSampleModule;
}());
export { MableSampleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFibGUtc2FtcGxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hYmxlLXNhbXBsZS8iLCJzb3VyY2VzIjpbImxpYi9tYWJsZS1zYW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0IxRDtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBaEI3QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0I7Z0JBQ2pDLGdCQUFnQixDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDLGFBQWE7Z0JBQ3JCLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixZQUFZLENBQUMsT0FBTyxDQUFDO29CQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO29CQUNoRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO29CQUN0RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2lCQUN6RCxDQUFDO2dCQUNGLGFBQWE7Z0JBQ2IsZ0JBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixDQUFDO1NBQy9ELENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hYmxlU2FtcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWJsZS1zYW1wbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS93ZWxjb21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01hYmxlU2FtcGxlQ29tcG9uZW50LFxuICAgIFdlbGNvbWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnd2VsY29tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICd3ZWxjb21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuICAgIF0pLFxuICAgIFByb2R1Y3RNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWFibGVTYW1wbGVDb21wb25lbnQsUHJvZHVjdE1vZHVsZSxXZWxjb21lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYWJsZVNhbXBsZU1vZHVsZSB7IH1cbiJdfQ==