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

  public showSideNav = false;

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  onClickSidenav() {
    this.showSideNav = !this.showSideNav;
    this.toggleSidenav.emit();
  }
}
