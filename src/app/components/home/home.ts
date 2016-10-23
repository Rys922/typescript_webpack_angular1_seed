import {Inject,Component } from "angular1_typescript_decorators/Decorators";

@Component("App" , "ingApp",{
    template: require("./index.tpl.html")
})
export default class AppComponent{
    public res= {
        catImg : require("file!./cat.jpg")
    };
}