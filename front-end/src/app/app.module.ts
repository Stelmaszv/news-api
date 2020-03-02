import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './news-components/main/main.component';
import { SectionComponent } from './news-components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
