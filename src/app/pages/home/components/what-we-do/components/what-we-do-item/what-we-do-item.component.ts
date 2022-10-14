import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { WhatWeDoItem } from './models/what-we-do-item';

@Component({
  selector: 'app-what-we-do-item',
  templateUrl: './what-we-do-item.component.html',
  styleUrls: ['./what-we-do-item.component.scss']
})
export class WhatWeDoItemComponent implements AfterViewInit {
  @Input() item: WhatWeDoItem;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
