import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SectionComponent } from './news-components/section/section.component';
import { AppRoutingModule,AppRouting } from './/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    AppRouting
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
