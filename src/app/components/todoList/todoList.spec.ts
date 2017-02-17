import { TodoList } from "./todoList";
import ToDoItem from './models/todoItem';


declare let angular:any;
let mock: ng.IMockStatic = angular.mock as ng.IMockStatic;;

describe("Service: MenuService", () => {
    var componentService: ng.IComponentControllerService;
    beforeEach(mock.module("App"));
    beforeEach(inject((_$componentController_) => {
            componentService = _$componentController_;
    }));

    it("should have this same number of Todos as passed" , () => {
        let passedTodos = [{} , {}];
        let mock: TodoList =  componentService("todoList" , null , {todos: passedTodos} ) as TodoList;
        expect(mock.todos).toBeDefined();
        expect(mock.todos.length).toBe(2);
    });
    it("should remove passed item when requested" , () => {
        let passedTodos = [];
        passedTodos.push(new ToDoItem());
        let v2: ToDoItem = new ToDoItem();
        passedTodos.push(v2);
        let mock: TodoList =  componentService("todoList" , null , {todos: passedTodos} ) as TodoList;
        mock.delete(v2);
        let index:number = mock.todos.indexOf(v2);
        expect(index).toBe(-1);
    });

})