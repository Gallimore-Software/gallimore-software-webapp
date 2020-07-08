import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    (this.slideIndex === 2) ? this.slideIndex = 0 : this.slideIndex++;
  }

  prev() {
    (this.slideIndex === 0) ? this.slideIndex = 2 : this.slideIndex--;
  }

  show(n) {
    this.slideIndex = n;
  }

  getBackgroundColor(n) {
    return n === this.slideIndex ? 'white' : 'transparent';
  }
}
