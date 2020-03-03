import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './news-components/details/details.component';
import { MainComponent } from './news-components/main/main.component';
const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/:id', component: DetailsComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const AppRouting = [DetailsComponent,MainComponent]
