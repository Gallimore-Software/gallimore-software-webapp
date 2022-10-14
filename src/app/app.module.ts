import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/home/components/about-us/about-us.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ComponentPageTitle } from './shared/services/page-title/page-title';
import { SlideShowComponent } from './shared/components/slide-show/slide-show.component';
import { WhatWeDoComponent } from './pages/home/components/what-we-do/what-we-do.component';
import { ProudComponent } from './pages/home/components/proud/proud.component';
import { WhatWeDoItemComponent } from './pages/home/components/what-we-do/components/what-we-do-item/what-we-do-item.component';
import { TechnologiesWeUseComponent } from './pages/home/components/technologies-we-use/technologies-we-use.component';
import { TechnologiesWeUseItemComponent } from './pages/home/components/technologies-we-use/components/technologies-we-use-item/technologies-we-use-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavComponent,
    HeaderComponent,
    SlideShowComponent,
    WhatWeDoComponent,
    ProudComponent,
    WhatWeDoItemComponent,
    TechnologiesWeUseComponent,
    TechnologiesWeUseItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ComponentPageTitle],
  bootstrap: [AppComponent]
})
export class AppModule { }
