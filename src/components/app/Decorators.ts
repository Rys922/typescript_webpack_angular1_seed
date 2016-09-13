/***Bootstraper is used to delay bootstrapping module.
 * thanks to this- module instanc dont have to be ready when we are using Decorators.
 * Additionall call is required when after instantiating module,but I think it's fine 
*/ 
export namespace Bootstraper{
    var initializers = {};
    export function AddInitializer(angularModule:string|any ,initializer:any ){
        let name = angular.isString(angularModule)? angularModule : angularModule.name;
        if(initializers[name] === undefined){
            initializers[name] = [];
        }
        initializers[name].push(initializer);
    }
    export function BootstrapModule(angularModule:string|any){
        let name = angular.isString(angularModule)? angularModule : angularModule.name;
        angular.forEach(initializers[name] , (initializer) => {
            initializer();
        })
    } 
}


/**
 * Add initializer to que
 */
function instantiate(moduleName: string, name: string, mode: string, target) {
        Bootstraper.AddInitializer(moduleName , 
         (): void => {
            angular.module(moduleName)[mode](name, target);
        });
}

/**
 * Component Decorator can be used to create component without additionall ComponentOptions classFactory
 * since this is not much code i think that it can be used to create real life appliaction
 * options Object is an instance od IComponentOptions so we are not limiting ourselfs
 */
export const Component = function(moduleName: string , componentName: string ,  options: ng.IComponentOptions): Function {
  return (controller: Function) => {
    options.controller = controller;
    return instantiate(moduleName, componentName, 'component', options);
  };
};

export function Service(moduleName: string, serviceName: string) {
        return ( service: Function) => { 
            instantiate(moduleName, serviceName, 'service' , service);
        }
}
export function Controller(moduleName: string, ctrlName: string) {
    return ( controller: Function) => { 
            instantiate(moduleName, ctrlName, 'controller' , controller);
    }
}
export function Inject(...args: Array<string>){
    return (target) => {
        target.$inject = args;
    }
}











