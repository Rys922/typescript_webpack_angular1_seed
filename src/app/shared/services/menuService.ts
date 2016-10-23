import {Service } from "angular1_typescript_decorators/Decorators";

export class MenuItem{
    
    subItems : Array<MenuItem>;
    
    constructor( public sref: string ,public caption: string) {
        
        
    }
}

@Service("App" , "menuService")
export  class MenuService{
    public getMenuItems(){
        var menu = new Array<MenuItem>();
        menu.push(new MenuItem("home" , "Home"));
        menu.push(new MenuItem("error({message: 'Bula bula '})" , "ErrorPage"));
        return menu;
    }
}
