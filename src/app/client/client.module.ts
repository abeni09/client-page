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
import { SearchComponent } from './block-types/search/search.component';
import { HeaderComponent } from './block-types/header/header.component';
import { FooterComponent } from './block-types/footer/footer.component';
import { SlideShowComponent } from './block-types/slide-show/slide-show.component';
import { ArchiveComponent } from './block-types/archive/archive.component';

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
    VacancySearchComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    SlideShowComponent,
    ArchiveComponent
  ],
  imports: [CommonModule, ClientRoutingModule]
})
export class ClientModule {}
