import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'app-vacancy-search',
  templateUrl: './vacancy-search.component.html',
  styleUrls: ['./vacancy-search.component.styl']
})
export class VacancySearchComponent implements OnInit {
  @Input() block: Block
  constructor() { }

  ngOnInit() {
  }

}
