import "angular";
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {appHttpConfig} from  "./config/httpConfig/httpConfig";
import {provideState} from  "./config/stateConfig/stateConfig";

import  "./Components/app/App"
import  "./Components/Error/ErrorComponent"
import {Bootstraper } from "./Decorators";

const externalModulesNames:Array<any> = [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize'
];

var baseModule  = angular.module("App" , externalModulesNames);
baseModule.config(provideState);
baseModule.config(appHttpConfig);
Bootstraper.BootstrapModule(baseModule);

angular.bootstrap(document , [baseModule.name] )



