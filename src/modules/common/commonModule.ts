import {Bootstraper } from "angular1_typescript_decorators/Decorators";
import "./shared/components/header/header";
import "./shared/components/footer/footer";

var common = angular.module("IngCommon" , []);
Bootstraper.BootstrapModule(common);

