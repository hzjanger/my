import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchComponent} from './layout/search/search.component';
import {CompanyComponent} from './layout/company/company.component';
import {SearchResultsComponent} from './layout/search-results/search-results.component';
import {LoginComponent} from './layout/login/login.component';
import {RegisterComponent} from './layout/register/register.component';
import {MainPageComponent} from './layout/main-page/main-page.component';
import {ErrorComponent} from './layout/error/error.component';


const routes: Routes = [
  {path: '',component: MainPageComponent,children:[
      {path: '',component: SearchComponent},
      {path: 'result',component: SearchResultsComponent},
      {path: 'information',component: CompanyComponent}
    ]},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: '**',component: ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
