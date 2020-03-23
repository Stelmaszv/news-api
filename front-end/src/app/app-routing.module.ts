import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './news-components/details/details.component';
import { MainComponent } from './news-components/main/main.component';
import { ShowCategoryComponent } from './news-components/show-category/show-category.component';
import { LoginComponent } from './news-components/login/login.component';
import { AddnewsComponent } from './news-components/addnews/addnews.component';
import { AuthGuard } from './gard/auth.guard';
const appRoutes: Routes = [
  { 
    path: 'addnews',
    component: AddnewsComponent,
    canActivate:[AuthGuard]
  },
  { path: 'main', component: MainComponent },
  { path: 'main/:id', component: DetailsComponent },
  { path: 'showAll/:search', component: ShowCategoryComponent },
  { path: 'login', component: LoginComponent },
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
export const AppRouting = [DetailsComponent,MainComponent,ShowCategoryComponent,LoginComponent,AddnewsComponent]
export const providers =  AuthGuard