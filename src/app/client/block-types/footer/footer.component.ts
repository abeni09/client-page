import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'block-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }
  get footer() {
    return this.clientService.footer;
  }

}
