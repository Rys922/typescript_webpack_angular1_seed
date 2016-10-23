import {Inject, Directive } from "angular1_typescript_decorators/Decorators";

@Directive("App" , "stateLoading")
@Inject("$transitions")
export class LoadingState implements ng.IDirective{
    
    
    constructor(private $transition) {
        
    }

    link =  (scope, element) =>  {

      element.hide();

        let showLoading = ()  => {
            console.log("sow");
            element.show();
        };
        let hideLoading =  () => {
            console.log("hide");
            element.hide();
        }
        this.$transition.onStart({}, showLoading); 
        
        this.$transition.onError({}, hideLoading);
        this.$transition.onFinish({}, hideLoading);
        
      
        
      };

      
    

}

