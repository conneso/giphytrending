import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { GifsComponent } from './gifs/gifs.component';

import{HttpClientModule} from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from "primeng/api";
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    GifsComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [MessageService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
