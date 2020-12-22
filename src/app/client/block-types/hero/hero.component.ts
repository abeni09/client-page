import { Component, Input } from '@angular/core';
import { Block } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() block: Block

  hreff=window.location.href
  get imagePath() {
    return environment.apirUrl + '/uploads/original/' + this.block.data.image.path
  }
  redirect(){
    // window.open("https://www.google.com");
    window.location.href="https://" + this.block.data.cta.url
  }

}
