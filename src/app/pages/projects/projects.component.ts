import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  @Input() projets : Array<Project> = [
    new Project('Inventory Manager', 'Manager your inventory in Angular', 'https://gallimoresoftware.com/inventory-manager', ''),
    new Project('Inventory Manager', 'Manager your inventory in Angular', 'https://gallimoresoftware.com/inventory-manager', ''),
    new Project('Inventory Manager', 'Manager your inventory in Angular', 'https://gallimoresoftware.com/inventory-manager', '')
  ];

  ngOnInit(): void {
  }

}
