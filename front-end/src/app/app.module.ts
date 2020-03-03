import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MainComponent } from './news-components/main/main.component';
import { SectionComponent } from './news-components/section/section.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: MainComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
