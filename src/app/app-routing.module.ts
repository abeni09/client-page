import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuestGuard } from "./auth/guest.guard";
import { NewsDetailComponent } from './client/block-types/news-detail/news-detail.component';

const routes: Routes = [
  // {
  //   path: "backend",
  //   canLoad: [AuthGuard],
  //   loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  // },
  // {
  //   path: "login", 
  //   component: LoginComponent,
  //   canActivate: [GuestGuard]
  // },
  {
    path: '',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, GuestGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
