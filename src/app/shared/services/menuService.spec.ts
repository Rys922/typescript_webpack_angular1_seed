import {MenuService} from "./menuService";
import SettingsService from "./settingsService";

declare let angular: any;

describe("Service: MenuService", () => {
    var menuService: MenuService;
    var settings;
    var CreateService = () => {

              return new MenuService(settings as SettingsService) ;

         };
    beforeEach(angular.mock.module("App"));

     beforeEach(angular.mock.inject(($injector) => {

                settings = $injector.get("settings"); ;
         }));

    it("should be created and dependency should be inected ", () =>  {
         var s = CreateService();

         expect(settings.menu).toBeDefined();
         expect(settings).toBeDefined();
         expect(s).toBeDefined();

    });
    it("should return this same menu items as settings service (and should have at least one item )", () =>  {
         var s = CreateService();
         expect(s.getMenuItems()).toBe(settings.menu);
         expect(s.getMenuItems().length).toBeGreaterThan(0);
        }
    );


});