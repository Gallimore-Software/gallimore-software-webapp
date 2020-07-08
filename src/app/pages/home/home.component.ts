import { Component, OnInit } from '@angular/core';
import { ComponentPageTitle } from '@app/shared/services/page-title/page-title';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pageTitle: ComponentPageTitle) { }

  ngOnInit(): void {
    this.pageTitle.title = "Gallimore Software";
  }

}
