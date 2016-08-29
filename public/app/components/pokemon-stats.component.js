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
var PokemonStatsComponent = (function () {
    function PokemonStatsComponent() {
        this.pokemon = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PokemonStatsComponent.prototype, "pokemon", void 0);
    PokemonStatsComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-stats',
            template: "\n\t\t<ul class=\"list-group\">\n                  <li class=\"list-group-item\">\n                    <strong>HP</strong>\n                    <span class=\"badge\">{{ pokemon.stats.hp}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Attack</strong>\n                    <span class=\"badge\">{{ pokemon.stats.attack}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Defense</strong>\n                    <span class=\"badge\">{{ pokemon.stats.defense}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Special Attack</strong>\n                    <span class=\"badge\">{{ pokemon.stats['sp.atk']}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Special Defense</strong>\n                    <span class=\"badge\">{{ pokemon.stats['sp.def']}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Speed</strong>\n                    <span class=\"badge\">{{ pokemon.stats.speed}}</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Total</strong>\n                    <span class=\"badge\">{{ pokemon.stats.total}}</span>\n                  </li>\n                </ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonStatsComponent);
    return PokemonStatsComponent;
}());
exports.PokemonStatsComponent = PokemonStatsComponent;
//# sourceMappingURL=pokemon-stats.component.js.map