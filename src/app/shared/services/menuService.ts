import {Service, Inject } from "angular1_typescript_decorators/Decorators";
import Setting from "./settings"

@Service("App", "menuService")
@Inject("settings")
export class MenuService {
    public getMenuItems() {
        return this.settings.menu;
    }

    constructor(private settings: Setting) {
    }
}
