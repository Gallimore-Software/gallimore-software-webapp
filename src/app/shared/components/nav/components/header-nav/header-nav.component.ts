import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Input() navItems = [];
  @Output() openSidenav: EventEmitter<any> = new EventEmitter();

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.componentPageTitle.title;
  }

  route(page) {
    this.router.navigate([page]);
  }

  onOpenSidenav() {
    console.log('onOpenSidenav : header-nav');
    this.openSidenav.emit(null);
  }
}
