import { Component, Input } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() block: Block
}
