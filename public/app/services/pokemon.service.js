System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Rx_1;
    var PokemonService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            PokemonService = (function () {
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
            exports_1("PokemonService", PokemonService);
        }
    }
});
//# sourceMappingURL=pokemon.service.js.map