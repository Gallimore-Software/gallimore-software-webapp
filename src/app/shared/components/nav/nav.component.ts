import { NavItem } from './models/nav-item';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output() sidenavToggled: EventEmitter<boolean> = new EventEmitter();

  public showSidenav = false;

  public navItems = [
    new NavItem('home'),
    new NavItem('projects'),
    new NavItem('contact'),
    new NavItem('technologies'),
    new NavItem('about'),
    new NavItem('services')
  ];

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  onOpenSidenav() {
    console.log('onOpenSidenav : nav');
    this.showSidenav = true;
    this.sidenavToggled.emit(this.showSidenav);
  }

  onCloseSidenav() {
    console.log('onCloseSidenav : nav');
    this.showSidenav = false;
    this.sidenavToggled.emit(this.showSidenav);
  }
}
