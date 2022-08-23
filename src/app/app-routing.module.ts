import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { ContentLayoutComponent } from './Shared/Components/content-layout/content-layout.component';
import { AuthGuard } from './Shared/helper/guards/auth.guard';
import { UnauthGuard } from './Shared/helper/guards/unauth.guard';
import { AppRoutes } from './Shared/Models/app/AppRoutes';
import { content } from './Shared/routes/content-routes';

const routes: Routes = [
  {
   path:AppRoutes.Authentication.login.full,
   component:LoginComponent,
   pathMatch: "full",
   canActivate: [UnauthGuard]
  },
  {
   path: "",
   component: ContentLayoutComponent,
   children: content,
   canActivate: [AuthGuard]
 },
 {
   path: "**",
   redirectTo: AppRoutes.home.sub,
 }
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes,
     {
       preloadingStrategy: PreloadAllModules,
       scrollPositionRestoration:'top'
     }
     )],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
