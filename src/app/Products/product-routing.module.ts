import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutes } from "../Shared/Models/app/AppRoutes";
import { ProductListComponent } from "./product-list/product-list.component";


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: AppRoutes.Product.sub,
        component: ProductListComponent,
      },
      {
        path: AppRoutes.Product.full,
        redirectTo: AppRoutes.Product.sub
      },
    ],
  },
];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ProductRoutingModule {}
