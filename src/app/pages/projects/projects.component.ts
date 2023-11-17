import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projects: Array<Project> = [
    new Project('gallimoresoftware.com Source Code', 'Custom written Angular 14 app written for this website, all pages broken down into granular components.', 'https://github.com/Gallimore-Software/gallimore-software', ''),
    new Project('gallimoresoftware.com Design Mockups', 'Custom designed Figma mockups for this website.', 'https://www.figma.com/file/TwAcZj3JEDvNXQUPX2VfU0/Gallimore-Software-Site-(Community)?type=design&node-id=5-2&mode=design', ''),
    new Project('Hormesis Elite Android App', 'Score and time tracker, and global leaderboard for the Hormesis Elite 1v1 paintball duel tour', 'https://play.google.com/store/apps/details?id=com.gallimore.hormesis_elite', ''),
    new Project('Hormesis Elite iOS App', 'Score and time tracker, and global leaderboard for the Hormesis Elite 1v1 paintball duel tour', 'https://apps.apple.com/us/app/hormesis-elite/id6449320338', ''),
    new Project('Inventory Management App', 'Sample inventory management Angular application', 'https://github.com/Gallimore-Software/inventory', ''),
    new Project('Inventory Management API', 'Sample inventory management .NET 6 API', 'https://github.com/Gallimore-Software/inventory-api', ''),
  ];

  ngOnInit(): void {
  }

}
