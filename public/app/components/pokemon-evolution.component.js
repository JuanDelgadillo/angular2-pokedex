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
var PokemonEvolutionComponent = (function () {
    function PokemonEvolutionComponent() {
        this.pokemon = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PokemonEvolutionComponent.prototype, "pokemon", void 0);
    PokemonEvolutionComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-evolution',
            template: "\n\t\t<div class=\"text-center\" *ngFor=\"let evolution of pokemon.evolution, let last = last\">\n                  <a [routerLink]=\"['/pokemon', evolution ]\">\n                    <img src=\"{{evolution | imageify}}\" width=\"160\">\n                    <p>\n                      <strong>{{evolution}}</strong>\n                    </p>\n                  </a>\n                  <span *ngIf=\"!last\" class=\"glyphicon glyphicon-arrow-down\"></span>\n                </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonEvolutionComponent);
    return PokemonEvolutionComponent;
}());
exports.PokemonEvolutionComponent = PokemonEvolutionComponent;
//# sourceMappingURL=pokemon-evolution.component.js.map