import { TodoList } from "./todoList";
import ToDoItem from "./models/todoItem";
import { ITodoListService } from "./services/todoListService";
import TodoListService from "./services/todoListService";


declare let angular: any;
let mock: ng.IMockStatic = angular.mock as ng.IMockStatic;;
let mockedTodosService: ITodoListService = {} as ITodoListService;




describe("Todo List Component ", () => {
    var componentService: ng.IComponentControllerService;
    beforeEach(mock.module("App"));
    beforeEach(inject((_$componentController_ , todoListService) => {
        componentService = _$componentController_;
        mockedTodosService = todoListService as TodoListService;
    }));


    it("should have this same number of Todos as passed", () => {

        let passedTodos: Array<any> = [{}, {}];
        let todoListComponent: TodoList = componentService("todoList", null, { todos: passedTodos }) as TodoList;
        expect(todoListComponent.todos).toBeDefined();
        expect(todoListComponent.todos.length).toBe(2);
    });
    it("should remove passed item when requested", () => {

        let passedTodos = [];
        passedTodos.push(new ToDoItem());
        let v2: ToDoItem = new ToDoItem();
        passedTodos.push(v2);
        mockedTodosService.saveAll = () =>{};
        mockedTodosService.getList = () =>{
            return passedTodos;
        };
        mockedTodosService.removeItem = (todoItem) => {
            let index: number = passedTodos.indexOf(todoItem);
            passedTodos.splice(index, 1);
        }

        let todoListComponent: TodoList = componentService("todoList", null, { todos: passedTodos, }) as TodoList;

        todoListComponent.delete(v2);
        let index: number = todoListComponent.todos.indexOf(v2);
        expect(index).toBe(-1);
    });

})