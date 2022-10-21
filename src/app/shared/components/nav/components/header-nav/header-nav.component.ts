import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Output() clickSidenav: EventEmitter<any> = new EventEmitter();

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.componentPageTitle.title;
  }

  route(page) {
    this.router.navigate([page]);
  }

  emit() {
    this.clickSidenav.emit(null);
  }
}
