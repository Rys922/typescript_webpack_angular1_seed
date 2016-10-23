import "angular";
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {Bootstraper } from "angular1_typescript_decorators/Decorators";

import {appHttpConfig} from  "./app/config/httpConfig/httpConfig";
import {provideState} from  "./app/config/stateConfig/stateConfig";
import  "./app/components/home/home" 
import  "./app/components/error/error"
import  "./app/shared/components/menu/menu"
import  "./app/shared/directives/loadingState";
import  "./modules/common/commonModule";

const externalModulesNames:Array<any> = [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',  
  'IngCommon'
  ];

var baseModule  = angular.module("App" , externalModulesNames);
baseModule.config(provideState);
baseModule.config(appHttpConfig);

Bootstraper.BootstrapModule(baseModule);

angular.bootstrap(document , [baseModule.name] )



