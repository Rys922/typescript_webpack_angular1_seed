import {Inject,Component } from "angular1_typescript_decorators/Decorators";
import "./style.scss"

@Component("App" , "ingError" , {
    template: require("./index.tpl.html"),
    bindings: {
        msg: "@"
    }
})
@Inject("$http")
export default  class ErrorComponent{
    
    constructor(http ) {
        http.get("aa");
    }
    msg:any;
}