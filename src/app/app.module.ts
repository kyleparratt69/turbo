import { BrowserModule } from '@angular/platform-browser';
import {Component, Directive, NgModule, Pipe} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './views/home/jumbotron/jumbotron.component';
import { SideMenuComponent } from './views/home/side-menu/side-menu.component';
import { SearchBarComponent } from './views/home/search-bar/search-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContentGridComponent } from './views/home/content-grid/content-grid.component';
import { ContentPanelComponent } from './views/home/content-grid/content-panel/content-panel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JumbotronComponent,
    SideMenuComponent,
    SearchBarComponent,
    ContentGridComponent,
    ContentPanelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
