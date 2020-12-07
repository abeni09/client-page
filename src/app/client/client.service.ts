import { Injectable } from "@angular/core";
// import { url } from 'inspector';
import { RequestService } from "../http/request.service";
import { Block, HeaderItem, Footer, newsDetail } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  pageNotFound: boolean = false;
  pageId: number = 0;
  pageBlocks: Block[] = [];
  pageSlug: string;
  headerItems: HeaderItem[] = [];
  footer: Footer;
  loading: boolean = true;
  newsDetail:newsDetail;

  cache: object = {};

  constructor(private http: RequestService) {}

  /**
   * Get page
   */
  getPage() {
    // get current slug
    const currentSlug = window.location.pathname;
    // if(currentSlug=='/newsDetail/'+'**'){
      
    // }
    // if the current slug is equal to the current page slug
    if (currentSlug === this.pageSlug) return;

    // reset data
    this.pageNotFound = false;
    this.loading = true;
    this.pageSlug = currentSlug;

    // get cached page
    const cachedPage = this.cache[currentSlug];

    // if page is cached, load data from cache and exit
    // if (cachedPage) {
    //   this.pageId = cachedPage.page.id;
    //   this.pageBlocks = cachedPage.page.blocks;
    //   this.headerItems = cachedPage.header_items.map((item: any) => ({
    //     title: item.page.title,
    //     url: item.page.slug
    //   }));
    //   this.footer = cachedPage.footer;
    //   this.loading = false;
    //   return;
    // }

    this.http
      .get(`api/pages/find`, {
        slug: window.location.pathname
      })
      .subscribe(res => {
        this.headerItems = res.data.header_items.map((item: any) => ({
          title: item.page.title,
          url: item.page.slug
        }));
        // this.newsDetail=res.data.news_detail.map((detail:any) => ({
        //   title:detail.page.title,
        //   url:detail.page.url+"/"+detail.page.id,
        //   date:detail.page.createdDate,
        //   description:detail.page.description

        // }));
        this.newsDetail=res.data.detail;
        this.footer = res.data.footer;
        this.loading = false;

        if (!res.success) {
          this.pageNotFound = true;

          return;
        }
        this.cache[currentSlug] = res.data;

        this.pageId = res.data.page.id;
        this.pageBlocks = res.data.page.blocks;
      });
  }
}
