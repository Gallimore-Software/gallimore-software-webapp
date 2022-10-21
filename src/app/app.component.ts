import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallimore-software-site';
  showContent = true;

  onToggleSidenav() {
    console.log('onToggleSidenav');
    this.showContent = !this.showContent;
  }
}