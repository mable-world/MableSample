import * as tslib_1 from "tslib";
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MableSampleComponent } from './mable-sample.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
let MableSampleModule = class MableSampleModule {
};
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
export { MableSampleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFibGUtc2FtcGxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hYmxlLXNhbXBsZS8iLCJzb3VyY2VzIjpbImxpYi9tYWJsZS1zYW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0IxRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFJLENBQUE7QUFBckIsaUJBQWlCO0lBaEI3QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0I7WUFDakMsZ0JBQWdCLENBQUM7UUFDbkIsT0FBTyxFQUFFLENBQUMsYUFBYTtZQUNyQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ2hELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Z0JBQ3RELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7YUFDekQsQ0FBQztZQUNGLGFBQWE7WUFDYixnQkFBZ0I7U0FDakI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLENBQUM7S0FDL0QsQ0FBQztHQUNXLGlCQUFpQixDQUFJO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWJsZVNhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vbWFibGUtc2FtcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvd2VsY29tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYWJsZVNhbXBsZUNvbXBvbmVudCxcbiAgICBXZWxjb21lQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnd2VsY29tZScsIGNvbXBvbmVudDogV2VsY29tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ3dlbGNvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnd2VsY29tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbiAgICBdKSxcbiAgICBQcm9kdWN0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW01hYmxlU2FtcGxlQ29tcG9uZW50LFByb2R1Y3RNb2R1bGUsV2VsY29tZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFibGVTYW1wbGVNb2R1bGUgeyB9XG4iXX0=