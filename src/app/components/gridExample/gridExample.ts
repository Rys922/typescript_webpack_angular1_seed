import {Inject, Component } from "angular1_typescript_decorators/Decorators";
import {State} from "../../../StateDecorator"


@Component("App", "grid", {
    template: require("./index.tpl.html")
})
@State({
    name: "grid",
    component: "grid",
    url: "/grid"
})

class GridExample {

}