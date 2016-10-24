import {Component } from "angular1_typescript_decorators/Decorators";
import "./style.scss"
@Component("IngCommon" , "ingFooter" , {
    template: require("./index.tpl.html")
})
export default class FooterComponent{
/**
 *
 */
constructor() {
    console.log("init");
    
}
} 
