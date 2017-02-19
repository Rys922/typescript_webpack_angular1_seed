import { Inject, Service } from "angular1_typescript_decorators/Decorators";
import TodoItem from "../models/todoItem";
import ToDoItem from "../models/todoItem";

export interface ILocalStorage {
    get<T>(key: string): T;
    set(key: string, value: any): void;
    
}
export interface ITodoListService {
    saveAll(): void;
    addItem(todoItem: TodoItem): void;
    removeItem(todoItem: TodoItem): void;
    rateItem(todoItem: TodoItem, rating: number): void;
    toggleState(todoItem: TodoItem): void;
    getList(): Array<ToDoItem>;
}


@Service("App", "todoListService")
@Inject("localStorageService")
export default class TodoListService  implements  ITodoListService {
    private static localSotrageKey: string = "todoListArray";
    private todoList: Array<TodoItem>;


    constructor(private localStorage: ILocalStorage) {
        this.todoList = localStorage.get<Array<ToDoItem>>(TodoListService.localSotrageKey);
        if (this.todoList === undefined || this.todoList === null) {
            this.todoList = [];
        }
    }
    public saveAll(): void {
        this.localStorage.set(TodoListService.localSotrageKey, this.todoList);
    }
    public addItem(todoItem: TodoItem): void {
        this.todoList.push(todoItem);
        this.saveAll();
    }
    public removeItem(todoItem: TodoItem): void {
        let index: number = this.todoList.indexOf(todoItem);
        this.todoList.splice(index, 1);
        this.saveAll();
    }
    public rateItem(todoItem: TodoItem, rating: number): void {
        todoItem.priority = rating;
        this.saveAll();
    }
    public toggleState(todoItem: TodoItem): void {
        todoItem.isDone = !todoItem.isDone;
        this.saveAll();
    }
    public getList(): Array<ToDoItem> {
        return this.todoList;
    }
}