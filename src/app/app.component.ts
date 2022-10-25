import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallimore-software-site';
  showContent = true;

  onSidenavToggled(showingSidenav: boolean) {
    console.log('onSidenavToggled : app, showingSidenav:', showingSidenav);
    this.showContent = !showingSidenav;
  }
}