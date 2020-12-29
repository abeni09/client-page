import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'block-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit() {
  }
  get headerItems() {
    return this.clientService.headerItems;
  }
  isLinkActive(itemUrl: string) {
    return itemUrl == location.pathname ? "active" : "inactive";
  }

}
