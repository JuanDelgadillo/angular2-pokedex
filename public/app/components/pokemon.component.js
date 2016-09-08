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
var router_1 = require('@angular/router');
var pokemon_service_1 = require('../services/pokemon.service');
var PokemonComponent = (function () {
    function PokemonComponent(_pokemonService, _routeParams) {
        var _this = this;
        this._pokemonService = _pokemonService;
        this._routeParams = _routeParams;
        this.pokemon = {};
        this.tab = 1;
        this.selectTab = function (tab) { return _this.tab = tab; };
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeParams.params.map(function (params) { return params.name; }).subscribe(function (pokemonName) {
            _this._pokemonService.getPokemonByName(pokemonName)
                .subscribe(function (pokemon) { return _this.pokemon = pokemon[0]; });
        });
    };
    PokemonComponent = __decorate([
        core_1.Component({
            selector: 'pokemon',
            providers: [pokemon_service_1.PokemonService],
            template: "\n      <!-- pokemon -->\n        <div class=\"page-header\">\n          <pokemon-name [pokemon]=\"pokemon\"></pokemon-name>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <pokemon-image [pokemon]=\"pokemon\"></pokemon-image>\n          </div>\n          <div class=\"col-md-6\">\n            <ul class=\"nav nav-tabs nav-justified\">\n              <li [ngClass]=\"{ 'active': tab === 1 }\"><a (click)=\"selectTab(1)\">Pok\u00E9dex</a></li>\n              <li [ngClass]=\"{ 'active': tab === 2 }\"><a (click)=\"selectTab(2)\">Stats</a></li>\n              <li [ngClass]=\"{ 'active': tab === 3 }\"><a (click)=\"selectTab(3)\">Evolution</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <div *ngIf=\"tab === 1\">\n                <pokemon-data [pokemon]=\"pokemon\"></pokemon-data>\n              </div>\n\n              <!-- Stats -->\n              <div *ngIf=\"tab === 2\">\n                <pokemon-stats [pokemon]=\"pokemon\"></pokemon-stats>\n              </div>\n\n              <!-- Evolution -->\n              <div *ngIf=\"tab === 3\">\n                <pokemon-evolution [pokemon]=\"pokemon\"></pokemon-evolution>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      <!-- /pokemon -->\n      <comments [pokemon]=\"pokemon\"></comments>\n  "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.ActivatedRoute])
    ], PokemonComponent);
    return PokemonComponent;
}());
exports.PokemonComponent = PokemonComponent;
//# sourceMappingURL=pokemon.component.js.map