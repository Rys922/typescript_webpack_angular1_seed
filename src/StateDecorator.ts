import {Ng1StateDeclaration , StateProvider} from "angular-ui-router";
import * as angular from "angular";


export function State(state: Ng1StateDeclaration) {
    return (target) => {
        StatesBootstraper.addState(state);
    };
}

export namespace StatesBootstraper {
    var states: Array<any> = [];
    export function addState(stateDeclaration: Ng1StateDeclaration): void {
        states.push(stateDeclaration);
    }
    export function registerStates(stateProvider: StateProvider): void {
        angular.forEach(states , (state) => {
            stateProvider.state(state);
        });
        states = [];
    };
}