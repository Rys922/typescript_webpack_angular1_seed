import {Inject, Component  } from "angular1_typescript_decorators/Decorators";
import TodoListService from  "../../services/todoListService";
import TodoItem from  "../../models/todoItem";

@Component("App" , "newTodoItem" , {
    template: require("./newTodoItem.tpl.html"),
    bindings: {
        onCanceled: "&"
    }
})
@Inject("todoListService")
class NewTodoItem {

    public name: string;
    public description: string;
    public rating: number;
    public onCanceled: any;

    constructor(private todoListService: TodoListService) {
        this.rating = 2;
    }
    public save() {
        let newItem: TodoItem = new TodoItem();
        newItem.description = this.description;
        newItem.isDone = false;
        newItem.priority = this.rating;
        newItem.title = this.name;
        this.todoListService.addItem(newItem);
        alert("Added");
    }

}