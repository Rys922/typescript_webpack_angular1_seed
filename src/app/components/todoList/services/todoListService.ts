import {Inject, Service  } from "angular1_typescript_decorators/Decorators";
import TodoItem from "../models/todoItem";

@Service("App" , "todoListService" )
@Inject("localStorageService")
export default class TodoListService{
    
    private todoList : Array<TodoItem>
    private key:string;
    constructor(private localStorage : any) {
        this.key =  "todoListArray";
        this.todoList = localStorage.get(this.key);
        if(this.todoList==undefined || this.todoList==null){
            this.todoList = [];
        }
    }
    public saveAll(){
        
        this.localStorage.set(this.key , this.todoList);
    }
    addItem(todoItem : TodoItem){
        this.todoList.push(todoItem);
        this.saveAll();
    }
    removeItem(todoItem : TodoItem){
        let index = this.todoList.indexOf(todoItem);
        this.todoList.splice(index , 1);
        this.saveAll();
    }
    rateItem(todoItem :TodoItem , rating: number){
        todoItem.priority = rating;
        this.saveAll();
    }
    toggleState(todoItem: TodoItem){
        todoItem.isDone = ! todoItem.isDone;
        this.saveAll();
    }
    getList(){
        
        return this.todoList;
    }

    

    


}