import {Inject, Component } from "angular1_typescript_decorators/Decorators";
import {State} from "StateDecorator"

@Component("App", "home", {
    template: require("./home.tpl.html")
})
@State({
    name: "home",
    component: "home",
    url: "/"
})
@Inject("localStorageService")
export default class AppComponent {

   
    constructor( public localStorageService) {
        console.log(this.localStorageService.getStorageType());
        
    }
    public res = {
        catImg: require("./cat.jpg")
    };
}