import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public github = '@assets/github-circle-white-transparent.svg';
  public title = environment.title;

  constructor() { }

  ngOnInit(): void {
  }

}
