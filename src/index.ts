

import 'reflect-metadata';
import "angular";

// main.ts
import { bootstrap } from 'ng-metadata/platform-browser-dynamic';

import { bundle } from 'ng-metadata/core';

import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {AppComponent} from  "./Components/app/App"


import {appHttpConfig} from  "./config/httpConfig/httpConfig"
import {provideState} from  "./config/stateConfig/stateConfig"
import { AsyncPipe } from 'ng-metadata/common';
import { enableProdMode } from 'ng-metadata/core';

const externalModulesNames:Array<any> = [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize'
];
var baseModule = angular.module("ingApp" , externalModulesNames);
baseModule.config(provideState);
externalModulesNames.push(provideState);
externalModulesNames.push(AsyncPipe);


bootstrap(AppComponent, externalModulesNames);



var  appStateConfig = ( $stateProvider) => {

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
}
