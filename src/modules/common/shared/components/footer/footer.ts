import {Component } from "angular1_typescript_decorators/Decorators";
import "./footer.scss"
@Component("IngCommon" , "ingFooter" , {
    template: require("./footer.tpl.html")
})
export default class FooterComponent{
/**
 *
 */
constructor() {
    console.log("init");
    
}
} 
