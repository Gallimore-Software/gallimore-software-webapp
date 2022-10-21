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
    this.showContent = !this.showContent;
  }
}