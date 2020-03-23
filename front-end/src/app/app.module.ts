import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SectionComponent } from './news-components/section/section.component';
import { AppRoutingModule,AppRouting,providers } from './/app-routing.module';
import { HeaderComponent } from './news-components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    AppRouting,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
