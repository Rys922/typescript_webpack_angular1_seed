import SettingsService from "./settingsService";
declare let angular:any;

describe("Service: SettingsService", () => {
    var settingsService: SettingsService;
    var module;
    beforeEach(() => {
        settingsService = new SettingsService();
        module = angular.mock.module("App");
    });

    describe("on getting url", () => {
        it("url should start with '/'", () => {
            
            var url = settingsService.baseUrl;
            
            expect(url[0] == ("/")).toBe(true)
            
        });
    });

    describe(" when getting menu Items ", () => {
        it("all Items Shoul have caption and sref fields", () => {
            
            var menu = settingsService.menu;
                angular.forEach(menu , (v :any ) => {
                    
                    expect(v.sref).toBeDefined();
                    expect(v.caption).toBeDefined();
                } );
            
            
        });
    });
});