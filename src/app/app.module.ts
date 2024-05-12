import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MystoreComponent } from './mystore/mystore/mystore.component';

@NgModule({
  declarations: [
    AppComponent,
    MystoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MystoreComponent]
})
export class AppModule { }
