import { environment } from '../../../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public github = '@assets/github-circle-white-transparent.svg';
  public title = environment.title;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  onGitHubClick() {
    this.document.location.href = 'https://github.com/nfgallimore';
  }
}
