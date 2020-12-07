import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'app-tender-search',
  templateUrl: './tender-search.component.html',
  styleUrls: ['./tender-search.component.css']
})
export class TenderSearchComponent implements OnInit {
  @Input() block: Block
  constructor() { }

  ngOnInit() {
  }

}
