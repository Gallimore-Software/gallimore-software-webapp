import { Component, OnInit } from '@angular/core';
import { WhatWeDoItem } from './components/what-we-do-item/models/what-we-do-item';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

  item = [
    new WhatWeDoItem(
      'Mobile', 
      '../../../../../assets/custom.png', 
      'Mobile app development services', 
      'For businesses of all sizes and industries, we can custom design an application to fit your needs.')
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
