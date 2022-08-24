import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./Shared/shared.module";
import {Interceptor} from './Shared/helper/interceptors/Interceptor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from './Authentication/authentication.module';
import { ProductModule } from './Products/product.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
