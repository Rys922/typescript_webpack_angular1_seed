import {Component } from "angular1_typescript_decorators/Decorators";
import "./style.scss"

@Component("IngCommon" , "ingHeader" , {
    template: require("./index.tpl.html"), 
    bindings: {
        caption: "@"
    }
})
export default class HeaderComponent{

} 
