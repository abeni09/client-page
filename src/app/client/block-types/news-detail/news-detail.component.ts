import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Block } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent{
  @Input() block: Block;
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }
  get imagePath() {
    return (
      environment.apirUrl + "/uploads/original/" + this.block.data.image.path
    );
  }
  // get detail(){
  //   return this.clientService.newsDetail;
  // }

}
