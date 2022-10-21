import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallimore-software-site';
  hideRouterOutlet = false;

  onShowSidenav() {
    if (this.hideRouterOutlet) {
      this.hideRouterOutlet = false;
    } else {
      this.hideRouterOutlet = true;
    }
  }

  Opened = true;
  toggle() {
    this.Opened = !this.Opened;
  }
}