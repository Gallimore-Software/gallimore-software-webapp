import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ComponentPageTitle } from './shared/services/page-title/page-title';
import { SlideShowComponent } from './shared/components/slide-show/slide-show.component';
import { ProudComponent } from './pages/home/components/proud/proud.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechnologiesWeUseComponent } from './pages/technologies-we-use/technologies-we-use.component';
import { TechnologiesWeUseItemComponent } from './pages/technologies-we-use/components/technologies-we-use-item/technologies-we-use-item.component';
import { WhatWeDoItemComponent } from './pages/what-we-do/components/what-we-do-item/what-we-do-item.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { IntroComponent } from './pages/home/components/intro/intro.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MouseEnterLeaveDebounceDirective } from './shared/directives/mouse-enter-leave-debounce.directive';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavComponent,
    HeaderComponent,
    SlideShowComponent,
    ProudComponent,
    WhatWeDoComponent,
    WhatWeDoItemComponent,
    TechnologiesWeUseComponent,
    TechnologiesWeUseItemComponent,
    ContactComponent,
    ProjectsComponent,
    IntroComponent,
    MouseEnterLeaveDebounceDirective,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [ComponentPageTitle],
  bootstrap: [AppComponent]
})
export class AppModule { }
