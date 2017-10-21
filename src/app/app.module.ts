import { BrowserModule } from '@angular/platform-browser';
import {Component, Directive, NgModule, Pipe} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';

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
import {AngularFireDatabaseModule} from "angularfire2/database-deprecated";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import { CmswebComponent } from './Views/cms/cmsweb.component';
import { AddTemplateComponent } from './views/cms/add-template/add-template.component';
import { BlogTemplateComponent } from './views/cms/blog-template/blog-template.component';

@NgModule({
  declarations: [
    CmswebComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JumbotronComponent,
    SideMenuComponent,
    SearchBarComponent,
    ContentGridComponent,
    ContentPanelComponent,
    FooterComponent,
    AddTemplateComponent,
    BlogTemplateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
