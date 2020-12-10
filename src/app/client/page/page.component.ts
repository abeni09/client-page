import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
  document.getElementById("sidenav").style.height = "30%";
  document.getElementById("main").style.marginTop = "40%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenav").style.height = "0";
  document.getElementById("sidenav").style.transition = "1s";
  document.getElementById("main").style.marginTop = "0";
}

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit, OnDestroy {
  routeChangeSubscription: Subscription

  get headerItems() {
    return this.clientService.headerItems;
  }

  get loading() {
    return this.clientService.loading;
  }

  get notFound() {
    return this.clientService.pageNotFound;
  }

  get footer() {
    return this.clientService.footer;
  }
  
  get detail(){
    return this.clientService.newsDetail;
  }

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clientService.getPage();
    this.routeChangeSubscription = this.router.events.subscribe(() => {
      this.clientService.getPage();
    });
    // this.myFunction();
  }

  ngOnDestroy() {
    this.routeChangeSubscription.unsubscribe()
  }

  isLinkActive(itemUrl: string) {
    return itemUrl == location.pathname ? "active" : "inactive";
  }
  openMenu(){
    openNav();
  }
  closeMenu(){
    closeNav();
  }
  
// myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "headerItems") {
//     x.className += " responsive";
//   } else {
//     x.className = "headerItems";
//   }
// }

}
