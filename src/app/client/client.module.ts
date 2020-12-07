import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "./page/page.component";
import { ClientRoutingModule } from "./client-routing.module";
import { BlocksComponent } from "./blocks/blocks.component";
import { HeroComponent } from "./block-types/hero/hero.component";
import { TextComponent } from "./block-types/text/text.component";
import { TwoColumnsComponent } from "./block-types/two-columns/two-columns.component";
import { LoaderComponent } from "./loader/loader.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PartnersComponent } from "./block-types/partners/partners.component";
import { NewsDetailComponent } from './block-types/news-detail/news-detail.component';
import { TenderSearchComponent } from './block-types/tender/tender-search/tender-search.component';
import { TenderListComponent } from './block-types/tender/tender-list/tender-list.component';
import { VacancyListComponent } from './block-types/vacancy/vacancy-list/vacancy-list.component';
import { VacancySearchComponent } from './block-types/vacancy/vacancy-search/vacancy-search.component';

@NgModule({
  declarations: [
    PageComponent,
    BlocksComponent,
    HeroComponent,
    TextComponent,
    TwoColumnsComponent,
    LoaderComponent,
    PageNotFoundComponent,
    PartnersComponent,
    NewsDetailComponent,
    TenderSearchComponent,
    TenderListComponent,
    VacancyListComponent,
    VacancySearchComponent
  ],
  imports: [CommonModule, ClientRoutingModule]
})
export class ClientModule {}
