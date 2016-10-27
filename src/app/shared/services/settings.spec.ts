import SettingsService from "./settings"

describe("Service: SettingsService", () => {
    var settingsService: SettingsService;
    beforeEach(() => {
        settingsService = new SettingsService();
    });
    describe("on getting url", () => {
        it("url should start with '/'", () => {
            
            var url = settingsService.baseUrl;
            console.log(url);
            expect(url[0] == ("/")).toBe(true)
            
        });
    });
});