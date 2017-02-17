import {Inject, Component  } from "angular1_typescript_decorators/Decorators";
import {State} from "StateDecorator";


var loadingResolver: Function = ($timeout: ng.ITimeoutService) => {
    var promise: ng.IPromise<void> = $timeout( () => {}, 2000);
    return promise;
};
Inject("$timeout")(loadingResolver);
@Component("App", "ingError", {
    template: require("./error.tpl.html"),
    bindings: {
        msg: "@"
    }
})
@State({
    name: "error",
    url: "/err/:message",
    component: "ingError",
    resolve: { msg: loadingResolver }

})
export default class ErrorComponent {
    public msg: string;
}