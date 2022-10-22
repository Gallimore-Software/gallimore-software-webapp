import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project = new Project('', '', '', '')

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(project: Project) {
    window.location.href = project.url;
  }

}
