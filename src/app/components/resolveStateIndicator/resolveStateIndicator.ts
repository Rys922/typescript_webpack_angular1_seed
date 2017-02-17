import {Component, Inject} from "angular1_typescript_decorators/Decorators";
import {Transition, TransitionHookFn} from "angular-ui-router";
require("./resolveStateIndicator.scss");

@Component("App", "stateLoading", {
    template: require("./resolveStateIndicator.tpl.html")
})
@Inject("$transitions")
export default class ResolveStateIndicator {
    public visible: boolean = false;
    constructor($transition:  Transition ) {
        let showLoading: TransitionHookFn = () => {
            this.visible = true;
        };
        let hideLoading: TransitionHookFn = () => {
            this.visible = false;
        };
        $transition.onStart({}, showLoading);
        $transition.onError({}, hideLoading);
        $transition.onFinish({}, hideLoading);
    }


}
