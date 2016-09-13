import {Inject,Component } from "../../Decorators";

@Component("App" , "ingApp",{
    template: require("./App.tpl.html")
})
export default class AppComponent{
    public res= {
        catImg : require("file!./cat.jpg")
    };
}