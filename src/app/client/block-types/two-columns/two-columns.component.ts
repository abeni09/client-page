import { Component, Input, HostBinding } from "@angular/core";
import { Router } from '@angular/router';
import { Block } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import { ClientService } from '../../client.service';

@Component({
  selector: "app-two-columns",
  templateUrl: "./two-columns.component.html",
  styleUrls: ["./two-columns.component.css"]
})
export class TwoColumnsComponent {
  newsDetail:string="/contact"
  @Input() block: Block;
  @HostBinding('class.twoColumns') field: boolean = true;


  get imagePath() {
    return (
      environment.apirUrl + "/uploads/original/" + this.block.data.image.path
    );
  }
  get detail(){
    return this.clientService.newsDetail;
  }
  constructor(private clientService: ClientService, private router: Router) {}
  readMore(){
    const newsId=this.block.id;
    const newsTitle=this.block.title;
    const newsDetail=this.block.data.body;
    const newsCreatedAt=this.block.created_at
  }
}
