import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideIndex = 0;
  textContent = 'We offer high quality business supporting software solutions, for small to medium size businesses, to fit our customers\' unique needs.';

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    (this.slideIndex === 3) ? this.slideIndex = 0 : this.slideIndex++;
  }

  prev() {
    (this.slideIndex === 0) ? this.slideIndex = 3 : this.slideIndex--;
  }

  show(n) {
    this.slideIndex = n;
    switch (n) {
      case 0:
        this.textContent = 'We offer high quality business supporting software solutions, for small to medium size businesses, to fit our customers\' unique needs.';
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  getBackgroundColor(n) {
    return n === this.slideIndex ? 'white' : 'transparent';
  }
}
