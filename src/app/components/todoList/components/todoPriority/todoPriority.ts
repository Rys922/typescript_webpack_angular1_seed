import {Component  } from "angular1_typescript_decorators/Decorators";


@Component("App" , "todoPriority" ,
{
    template: require("./todoPriority.tpl.html"),
    bindings: {
        model: "=",
        onChange: "&"
    }
})
class Priority {
    public model;
    private onChange;
    public changeRating(rating: number): void {
        this.model = rating;
        this.onChange();
    }
}