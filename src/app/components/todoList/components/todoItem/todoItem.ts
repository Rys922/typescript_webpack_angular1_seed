import {Inject, Component  } from "angular1_typescript_decorators/Decorators";


@Component("App" , "todoListItem" , { 
    template: require("./todoItem.tpl.html" ),
    bindings: {
        item: "=" , 
        onDelete: '&', 
        onUpdate: '&'
    }
})
@Inject("$scope")
class TodoItem{
    private item;
    private onDelete;
    private onUpdate;
    constructor(private $scope : ng.IScope) {
        
        
    }
    public delete(){
        this.onDelete( {itemreference: this.item});
    }
    public save(){
        
        this.onUpdate( {itemreference: this.item});
        
    } 
    public $onInit(){
        
        this.$scope.$watch( () => { return this.item}  , () => {
            this.save();
        } , true);
    }
}