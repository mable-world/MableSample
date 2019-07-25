
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MableSampleComponent } from './mable-sample.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
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
  exports: [MableSampleComponent,ProductModule,WelcomeComponent]
})
export class MableSampleModule { }
