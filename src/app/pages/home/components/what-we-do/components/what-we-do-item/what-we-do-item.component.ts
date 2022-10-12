import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do-item',
  templateUrl: './what-we-do-item.component.html',
  styleUrls: ['./what-we-do-item.component.scss']
})
export class WhatWeDoItemComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() textContent = '';
  @Input() title = '';
  @Input() altText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
