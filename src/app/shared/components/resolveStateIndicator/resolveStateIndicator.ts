import {Component, Inject} from "angular1_typescript_decorators/Decorators";
require("./style.scss");

@Component("App", "stateLoading", {
    template: require("./index.tpl.html")
})
@Inject("$transitions")
export default class ResolveStateIndicator {
    public visible: boolean = false
    constructor($transitions) {
        let showLoading = () => {
            console.log("show");
            this.visible = true;
        };
        let hideLoading = () => {
            console.log("hide");
            this.visible = false;
        }
        $transitions.onStart({}, showLoading);
        $transitions.onError({}, hideLoading);
        $transitions.onFinish({}, hideLoading);
    }

}
