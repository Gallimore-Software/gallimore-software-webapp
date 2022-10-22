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
    new Project('Inventory Manager', 'Manage your inventory using a custom Angular app', 'https://github.com/nfgallimore/InventoryApp', ''),
    new Project('Timesheet Manager', 'Manage your timesheets with this Angular app', 'https://github.com/nfgallimore/Timesheet', ''),
  ];

  ngOnInit(): void {
  }

}
