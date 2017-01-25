
import {StatesBootstraper} from "../../../StateDecorator";

export function provideState($stateProvider: any, $urlRouterProvider: any, $locationProvider: any): void{
  // for any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  StatesBootstraper.registerStates($stateProvider);
}
provideState.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

