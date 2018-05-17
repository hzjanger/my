import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './layout/nav/nav.component';
import { BaseInfosComponent } from './layout/base-infos/base-infos.component';
import { CompanyComponent } from './layout/company/company.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './layout/search/search.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchResultsComponent } from './layout/search-results/search-results.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { ErrorComponent } from './layout/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaseInfosComponent,
    CompanyComponent,
    FooterComponent,
    SearchComponent,
    SearchResultsComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
