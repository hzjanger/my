import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FrameComponent} from './layout/frame/frame.component';
import {LoginComponent} from './layout/login/login.component';
import {ErrorComponent} from './layout/error/error.component';
import {RegisterComponent} from './layout/register/register.component';
import {MainComponent} from './layout/frame/main/main.component';
import {SearchResultsComponent} from './layout/frame/search-results/search-results.component';
import {BaseInfosComponent} from './layout/frame/base-infos/base-infos.component';
import {ResultComponent} from './layout/frame/result/result.component';
import {EnterprisePictureComponent} from './layout/frame/enterprise-picture/enterprise-picture.component';


const routes: Routes = [
  // ,children:[
  // {path: '',component: SearchComponent},
  // {path: 'result',component: SearchResultsComponent},
  // {path: 'information',component: BaseInfosComponent}
// ]
  {path: '',component: FrameComponent,children:[
      {path: '',component: MainComponent},
      {path: 'result',component: ResultComponent,children:[
          {path: '', component: SearchResultsComponent},
          {path: 'information', component: BaseInfosComponent},
          {path: 'enterprise', component: EnterprisePictureComponent}
        ]}
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
