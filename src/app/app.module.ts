import { MableSampleModule } from './../../projects/mable-sample/src/lib/mable-sample.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MableSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
