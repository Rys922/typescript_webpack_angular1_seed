import {Bootstraper } from "angular1_typescript_decorators/Decorators";
import "./components/header/HeaderComponent";
import "./components/footer/FooterComponent";

var common = angular.module("IngCommon" , []);
Bootstraper.BootstrapModule(common);

