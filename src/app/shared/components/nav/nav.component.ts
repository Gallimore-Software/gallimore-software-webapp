import { Component, Output, EventEmitter } from '@angular/core';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public componentPageTitle: ComponentPageTitle) { }

  @Output() toggleSidenav = new EventEmitter<null>();

  getTitle() {
    return this.componentPageTitle.title;
  }
}
