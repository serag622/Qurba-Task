import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import {SharedModule} from '../Shared/shared.module'


@NgModule({
  declarations: [ProductListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
