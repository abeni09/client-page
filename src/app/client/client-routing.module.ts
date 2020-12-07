import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsDetailComponent } from './block-types/news-detail/news-detail.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: "**",
    component: PageComponent,
  }
  // {
  //   path: "newsDetail/*",
  //   component:NewsDetailComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
