import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public componentPageTitle: ComponentPageTitle, private router: Router) { }

  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();

  getTitle() {
    return this.componentPageTitle.title;
  }

  route(page) {
    this.router.navigate([page]);
  }

  emit() {
    this.toggleSidenav.emit(null);
}

}
