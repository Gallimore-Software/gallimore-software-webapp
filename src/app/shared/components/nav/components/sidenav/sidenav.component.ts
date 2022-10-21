import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() opened = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    console.log('onClose');
    this.opened = false;
  }
}
