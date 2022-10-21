import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechnologiesWeUseComponent } from './pages/technologies-we-use/technologies-we-use.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { MatSidenavModule } from '@angular/material/sidenav'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'technologies', component: TechnologiesWeUseComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'services', component: WhatWeDoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    MatSidenavModule],
  exports: [RouterModule, 
    MatSidenavModule]
})
export class AppRoutingModule { }