import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() opened = true;
  @Output() close = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    console.log('onClose : sidenav');
    this.opened = false;
    this.close.emit();
  }
}
