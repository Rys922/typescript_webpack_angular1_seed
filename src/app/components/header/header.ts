import {Component } from "angular1_typescript_decorators/Decorators";
import "./header.scss";

@Component("App" , "ingHeader" , {
    template: require("./header.tpl.html"),
    bindings: {
        caption: "@"
    }
})
export default class HeaderComponent {

}
