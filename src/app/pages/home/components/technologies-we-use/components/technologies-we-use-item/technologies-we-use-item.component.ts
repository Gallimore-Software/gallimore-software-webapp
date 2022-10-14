import { Component, OnInit, Input } from '@angular/core';
import { TechnologiesWeUseItem } from './models/techonologies-we-use-item';

@Component({
  selector: 'app-technologies-we-use-item',
  templateUrl: './technologies-we-use-item.component.html',
  styleUrls: ['./technologies-we-use-item.component.scss']
})
export class TechnologiesWeUseItemComponent implements OnInit {
  @Input() technology: TechnologiesWeUseItem;

  constructor() { }

  ngOnInit(): void {
  }

}
