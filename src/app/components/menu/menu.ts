import {Component , Inject} from "angular1_typescript_decorators/Decorators";
import  {MenuService} from  "app/shared/services/menuService";

@Component("App" , "topMenu" , {
    template: require("./menu.tpl.html")
})
@Inject("menuService")
export default class TopMenuController {
    public menuItems: Array<any>;
    constructor(menuService: MenuService) {
        this.menuItems = menuService.getMenuItems();
    }

}
