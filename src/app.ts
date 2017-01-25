import "./imports/libs";
import "./imports/basic";
import "./imports/styles";
import "grid-resource";



import { Bootstraper } from "angular1_typescript_decorators/Decorators";
import { appHttpConfig } from "./app/config/httpConfig/httpConfig";
import { provideState } from "./app/config/stateConfig/stateConfig";
const externalModulesNames: Array<any> = [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',
  'BBGrid',
  'LocalStorageModule'
];

var baseModule = angular.module("App", externalModulesNames);
baseModule.config(provideState);
baseModule.config(appHttpConfig);

Bootstraper.BootstrapModule(baseModule);

angular.bootstrap(document, [baseModule.name])


baseModule.run(($httpBackend) => {
  console.log("ionit");
  $httpBackend.when("*.json")
    .respond(
    );
});
