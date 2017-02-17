import {Inject, Component  } from "angular1_typescript_decorators/Decorators";


@Component("App" , "todoListItem" , {
    template: require("./todoItem.tpl.html" ),
    bindings: {
        item: "=" ,
        onDelete: "&",
        onUpdate: "&"
    }
})
@Inject("$scope")
class TodoItem {
    private item: TodoItem;
    private onDelete: Function;
    private onUpdate: Function;
    constructor(private $scope: ng.IScope) {
    }
    public delete(): void {
        this.onDelete( {itemreference: this.item});
    }
    public save(): void {
        this.onUpdate( {itemreference: this.item});
    }
    public $onInit(): void {
        this.$scope.$watch( () => { return this.item; }  , () => {
            this.save();
        } , true);
    }
}