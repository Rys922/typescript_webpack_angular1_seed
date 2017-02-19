import TodoListService from "./todoListService";
import { ILocalStorage } from "./todoListService";
import ToDoItem from "../models/todoItem";
declare let angular: any;
let mock: ng.IMockStatic = angular.mock as ng.IMockStatic;;
let service: TodoListService;

class MocekdLocalStorage implements ILocalStorage{

    public dictionary: Object;
    constructor() {
        this.dictionary = {
            "todoListArray" : []
        }
    }
    public get<T>(key: string): T{
            return this.dictionary[key];
    }
    public set(key: string, value: any): void{
        this.dictionary[key] = value;
    }
}

describe("Todo List Service ", () => {
    beforeEach(mock.module("App"));
    beforeEach(mock.module(($provide: any)  => {
      $provide.service("localStorageService" , MocekdLocalStorage);
    }));
    beforeEach(mock.inject(( _todoListService_ )  => {
        service = _todoListService_;


    }));

    it("Todo list  should be empty " , () => {
        expect(service.getList().length).toBe(0);
    })
    it("should be possible to add Item" , () => {
        service.addItem(new ToDoItem());
        expect(service.getList().length).toBe(1);
    })
    it("should be possible to remove Item" , () => {
        let item  = new ToDoItem()
        service.addItem(item);
        expect(service.getList().length).toBe(1);
        service.removeItem(item);
        expect(service.getList().length).toBe(0);
    });
    it("should be possible to rate Item" , () => {
        let item  = new ToDoItem()
        service.addItem(item);
        service.rateItem(item, 3);
        expect(item.priority).toBe(3);
        service.rateItem(item, 4);
        expect(item.priority).toBe(4);
        service.rateItem(item, 1);
        expect(item.priority).toBe(1);
    });
    it("should be possible to chane item state" , () => {
        let item  = new ToDoItem()
        service.addItem(item);
        service.toggleState(item)
        expect(item.isDone).toBe(true);
        service.toggleState(item)
        expect(item.isDone).toBe(false);
    });
});