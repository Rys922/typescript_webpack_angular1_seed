import {Ng1StateDeclaration , StateProvider} from "angular-ui-router";


export function State(state: Ng1StateDeclaration){
    return (target) => {
        StatesBootstraper.addState(state);
    }
}

export namespace StatesBootstraper{
    var states = [];
    export function addState(stateDeclaration: Ng1StateDeclaration){
        states.push(stateDeclaration);
    }
    export function registerStates(stateProvider : StateProvider){
        angular.forEach(states , (state) => {
            //console.log(state);
            stateProvider.state(state);
        })
        states = [];
    } 
}