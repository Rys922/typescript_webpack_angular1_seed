import {Component } from "angular1_typescript_decorators/Decorators";
import {State} from "StateDecorator";


@Component("App", "grid", {
    template: require("./gridExample.tpl.html")
})
@State({
    name: "grid",
    component: "grid",
    url: "/grid"
})

class GridExample {

}