import { Component } from "angular1_typescript_decorators/Decorators";
import { State } from "StateDecorator";

@Component("App", "home", {
    template: require("./home.tpl.html")
})
@State({
    name: "home",
    component: "home",
    url: "/"
})
export default class AppComponent {
}