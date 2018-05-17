import { Component, OnInit } from '@angular/core';
import {ErrorComponent} from '../error/error.component';
import {LoginComponent} from '../login/login.component';
import {Routes} from '@angular/router';
import {SearchResultsComponent} from '../search-results/search-results.component';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
