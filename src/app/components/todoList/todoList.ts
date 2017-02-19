import {Inject, Component  } from "angular1_typescript_decorators/Decorators";
import  "./services/todoListService";
import TodoListService from  "./services/todoListService";
import {State} from "StateDecorator";
import "./components/newTodoItem/newTodoItem";
import "./components/todoPriority/todoPriority";
import "./components/todoItem/todoItem";
import ToDoItem from "./models/todoItem";


var todoResolver: Function = (todoService: TodoListService ) => {
    var todos: Array<ToDoItem> =  todoService.getList();
    return todos;
};
Inject("todoListService")(todoResolver);
@Component("App" , "todoList" , {
    template: require("./todoList.tpl.html"),
    bindings: {
        todos: "="
    }
})
@State({
    name: "todoList",
    url: "/todo",
    component: "todoList",
    resolve : {
        todos: todoResolver
    },
    bindings: {
        todos: "todos"
    }

})
@Inject("todoListService" )
export class TodoList {

    public todos: Array<ToDoItem>;
    constructor(      private todoService: TodoListService ) {
    }
    public ToggleNewVisibility() {
    }
    public delete(i: ToDoItem) {
        this.todoService.removeItem(i);
    }
    public update() {
        this.todoService.saveAll();
    }
}