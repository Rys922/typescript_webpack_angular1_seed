import {Inject, Component  } from "angular1_typescript_decorators/Decorators";
import {State} from "StateDecorator"
import "./error.scss"

var loadingResolver = ($timeout) => {
    var q = $timeout(function () {
        
    }, 2000)
    return q
}
Inject("$timeout")(loadingResolver);


@Component("App", "ingError", {
    template: require("./error.tpl.html"),
    bindings: {
        msg: "@"
    }
})
@State({
    name: "error",
    url: '/err/:message',
    component: "ingError",
    resolve: { msg: loadingResolver }

})
export default class ErrorComponent {

    constructor() {

    }
    msg: any;
}