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
var PokemonDataComponent = (function () {
    function PokemonDataComponent() {
        this.pokemon = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PokemonDataComponent.prototype, "pokemon", void 0);
    PokemonDataComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-data',
            template: "\n\t\t<ul class=\"list-group\">\n                  <li class=\"list-group-item\">\n                    <strong>Type</strong>\n                    <span class=\"pull-right\">\n                      <pokemon-type [pokemon]=\"pokemon\" ></pokemon-type>\n                    </span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Height</strong>\n                    <span class=\"pull-right\">{{pokemon.height}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Weight</strong>\n                    <span class=\"pull-right\">{{pokemon.weight}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Abilities</strong>\n                    <ul>\n                      <li *ngFor=\"let ability of pokemon.abilities\">\n                        {{ ability }}\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonDataComponent);
    return PokemonDataComponent;
}());
exports.PokemonDataComponent = PokemonDataComponent;
//# sourceMappingURL=pokemon-data.component.js.map