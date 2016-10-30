# TESTING


It's super easy to start testing in this project. 
When you'r creating new service, Component or something else , just put *.spec.ts file in directory and start using Jasmine as your testing framework.


You will find examples of test in: 
 menuServie.spec.ts
 and 
 settings.spec.ts
========================


```typescript
import SettingsService from "./settings"

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
```
Just few things to remember:
- [x] instead of using module("moduleName") use angular.mock.module("moduleName") since module is keyword in typescript
- [X] type npm test for testing - it should be watching your test files for imediate resuts
- [X] Open adress founded in npm test output and click Debug ( ) Karma v0.13.22 server started at http://localhost:9876/)

So let't test :)  

