import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './layout/frame/footer/footer.component';
import {LoginComponent} from './layout/login/login.component';
import {RegisterComponent} from './layout/register/register.component';
import {ErrorComponent} from './layout/error/error.component';
import {FrameComponent} from './layout/frame/frame.component';
import { MainComponent } from './layout/frame/main/main.component';
import {NavComponent} from './layout/frame/nav/nav.component';
import {SearchResultsComponent} from './layout/frame/search-results/search-results.component';
import {BaseInfosComponent} from './layout/frame/base-infos/base-infos.component';
import { ResultComponent } from './layout/frame/result/result.component';
import { EnterprisePictureComponent } from './layout/frame/enterprise-picture/enterprise-picture.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FrameComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    SearchResultsComponent,
    BaseInfosComponent,
    ResultComponent,
    EnterprisePictureComponent




  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
