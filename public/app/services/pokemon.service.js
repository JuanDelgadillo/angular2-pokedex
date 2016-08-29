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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var PokemonService = (function () {
    function PokemonService(_http) {
        this._http = _http;
        this._resource = 'public/data/pokemons.json';
    }
    PokemonService.prototype.getPokemons = function () {
        return this._http.get(this._resource)
            .map(function (res) { return res.json(); });
    };
    PokemonService.prototype.getPokemonByName = function (name) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.getPokemons()
                .subscribe(function (pokemons) {
                var pokemon = pokemons.filter(function (pokemon) { return pokemon.name === name; });
                observer.next(pokemon);
                observer.complete();
            });
        });
    };
    PokemonService.prototype.getPokemonsByType = function (type) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.getPokemons()
                .subscribe(function (pokemons) {
                var results = pokemons.filter(function (pokemon) { return pokemon.type.some(function (t) { return t === type; }); });
                observer.next(results);
                observer.complete();
            });
        });
    };
    PokemonService.prototype.saveComment = function (pokemon, comment) {
        var comments = this.getComments(pokemon);
        comments.push(comment);
        localStorage.setItem(pokemon, JSON.stringify(comments));
    };
    PokemonService.prototype.getComments = function (pokemon) {
        var comments = localStorage.getItem(pokemon);
        if (!comments)
            comments = [];
        else
            comments = JSON.parse(comments);
        return comments;
    };
    PokemonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map