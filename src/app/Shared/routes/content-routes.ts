import { Routes } from "@angular/router";
import { AppRoutes } from "../Models/app/AppRoutes";


export const content: Routes = [
   {
      path: "",
      loadChildren: () => import("../../Products/product.module").then((m) => m.ProductModule),
   },
   {
      path: AppRoutes.Product.full,
      loadChildren: () => import("../../Products/product.module").then((m) => m.ProductModule),
   },
];
