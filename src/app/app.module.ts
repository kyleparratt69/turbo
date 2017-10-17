import { BrowserModule } from '@angular/platform-browser';
import {Component, Directive, NgModule, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './views/home/jumbotron/jumbotron.component';
import { SideMenuComponent } from './views/home/side-menu/side-menu.component';
import { SearchBarComponent } from './views/home/search-bar/search-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JumbotronComponent,
    SideMenuComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
