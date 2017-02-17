import {Service } from "angular1_typescript_decorators/Decorators";


@Service("App", "settings")
export default class SettingsService {

    public baseUrl: string = "/";
    public menu: Array<Object> = [
        {
            sref: "home", caption: "Home"
        } ,
        {
            sref: "error({message: 'Example Parameter '})" , caption : "Loading Example"
        },
        {
            sref: "grid" , caption : "Grid Example"
        },
        {
            sref: "todoList" , caption : "Todo Example"
        }
    ];
}