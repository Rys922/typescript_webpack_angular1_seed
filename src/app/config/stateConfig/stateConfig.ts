import {StateDeclaration} from "angular-ui-router";
import {StatesBootstraper} from "../../../StateDecorator"

export function provideState($stateProvider, $urlRouterProvider, $locationProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  StatesBootstraper.registerStates($stateProvider);
}
provideState.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

