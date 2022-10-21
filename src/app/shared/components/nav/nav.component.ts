import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();

  public showSidenav = false;

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  onOpenSidenav() {
    console.log('onOpenSidenav');
    this.showSidenav = !this.showSidenav;
    this.toggleSidenav.emit(this.showSidenav);
  }

  onCloseSidenav() {
    console.log('onOpenSidenav');
    this.showSidenav = !this.showSidenav;
    this.toggleSidenav.emit(this.showSidenav);
  }
}
