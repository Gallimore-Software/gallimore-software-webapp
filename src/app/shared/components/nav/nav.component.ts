import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public github = '@assets/github-circle-white-transparent.svg';
  public title = environment.title;

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
  }

}
