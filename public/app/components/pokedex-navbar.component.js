"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PokedexNavbarComponent = (function () {
    function PokedexNavbarComponent() {
    }
    PokedexNavbarComponent = __decorate([
        core_1.Component({
            selector: 'pokedex-navbar',
            template: "\n    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['pokedex']\">\n            <img src=\"public/assets/img/logo.png\">\n            Pok\u00E9dex |\n          </a>\n          <a href=\"https://twitter.com/delgadillojuanm\" class=\"navbar-brand author\" target=\"_blank\">Written on Angular 2 by Juan Delgadillo</a>\n        </div>\n      </div>\n    </div>\n    <a href=\"https://github.com/JuanDelgadillo/angular2-pokedex\" target=\"_blank\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index:1031;\" src=\"https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png\"></a>\n  ",
            styles: ["\n    .author {\n      margin-top:3px;\n      font-size:15px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PokedexNavbarComponent);
    return PokedexNavbarComponent;
}());
exports.PokedexNavbarComponent = PokedexNavbarComponent;
//# sourceMappingURL=pokedex-navbar.component.js.map