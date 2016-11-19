import {Inject, Component  } from "angular1_typescript_decorators/Decorators";
import  "./services/todoListService"
import TodoListService from  "./services/todoListService"
import {State} from "StateDecorator"
import "./components/newTodoItem/newTodoItem"
import "./components/todoPriority/todoPriority"
import "./components/todoItem/todoItem"

var todoResolver = (todoService ) => {
    var todos =  todoService.getList();
    
    return todos;
}
Inject("todoListService")(todoResolver);

@Component("App" , "todoList" , { 
    template: require("./todoList.tpl.html"),
    bindings: {
        todos: "="
    }
})
@State({
    name: "todoList",
    url: '/todo',
    component: "todoList",
    resolve : {
        todos: todoResolver
    }, 
    bindings: {
        todos: 'todos'
    }
   
})
@Inject("todoListService" )
class TodoList{
    
    public todos :any;
    constructor(      private todoService ) {
        //this.todos = todoService.getList();
        
    }
    public ToggleNewVisibility(){
        console.log("canceled");
    }

    public delete(i){
        this.todoService.removeItem(i);
    }
    public update(i){
        this.todoService.saveAll(i);
    }
}