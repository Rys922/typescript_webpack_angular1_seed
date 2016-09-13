import {Bootstraper } from "../../../Decorators" 
import "./components/header/HeaderComponent";
import "./components/footer/FooterComponent";

var common = angular.module("IngCommon" , []);
Bootstraper.BootstrapModule(common);

