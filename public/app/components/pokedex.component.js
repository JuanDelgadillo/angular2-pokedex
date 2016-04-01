System.register(['angular2/core', 'angular2/http', 'angular2/router', '../pipes/imageify.pipe', '../services/pokemon.service', './pokemon-name.component', './pokemon-image.component', './pokemon-type.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, router_2, imageify_pipe_1, pokemon_service_1, pokemon_name_component_1, pokemon_image_component_1, pokemon_type_component_1;
    var PokedexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (imageify_pipe_1_1) {
                imageify_pipe_1 = imageify_pipe_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            },
            function (pokemon_name_component_1_1) {
                pokemon_name_component_1 = pokemon_name_component_1_1;
            },
            function (pokemon_image_component_1_1) {
                pokemon_image_component_1 = pokemon_image_component_1_1;
            },
            function (pokemon_type_component_1_1) {
                pokemon_type_component_1 = pokemon_type_component_1_1;
            }],
        execute: function() {
            PokedexComponent = (function () {
                function PokedexComponent(_pokemonService, _routeParams) {
                    var _this = this;
                    this._pokemonService = _pokemonService;
                    this._routeParams = _routeParams;
                    this.pokemons = [];
                    this.partition = function (data, n) {
                        return _.chain(data).groupBy(function (element, index) { return Math.floor(index / n); }).toArray().value();
                    };
                    if (this._routeParams.params.type) {
                        this.pokemonType = this._routeParams.get('type');
                        this._pokemonService.getPokemonsByType(this.pokemonType)
                            .subscribe(function (pokemons) {
                            _this.pokemons = pokemons;
                            _this.groupped = _this.partition(pokemons, 4);
                        });
                    }
                    else {
                        this._pokemonService.getPokemons()
                            .subscribe(function (pokemons) {
                            _this.pokemons = pokemons;
                            _this.groupped = _this.partition(pokemons, 4);
                        });
                    }
                }
                PokedexComponent = __decorate([
                    core_1.Component({
                        selector: 'pokedex',
                        pipes: [imageify_pipe_1.ImageifyPipe],
                        directives: [pokemon_name_component_1.PokemonNameComponent, pokemon_image_component_1.PokemonImageComponent, pokemon_type_component_1.PokemonTypeComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [pokemon_service_1.PokemonService, http_1.HTTP_PROVIDERS],
                        template: "\n\t\t<div>\n  \t\t\t<div class=\"page-header\">\n    \t\t\t<h1>Pok\u00E9dex <small class=\"pull-right\" [style.marginTop]=\"'20px'\">Showing <span class=\"badge\">{{pokemons.length}}</span> Pok\u00E9mons</small></h1>\n\t\t\t\t<h2 *ngIf=\"pokemonType\"><span class=\"label type-{{pokemonType | lowercase}}\">{{pokemonType}}</span></h2>\n  \t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"#group of groupped\">\n\t\t\t\t<div class=\"col-lg-3\" *ngFor=\"#pokemon of group\">\n\t\t\t\t\t<div class=\"pokemon panel panel-primary\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n          \t\t\t\t\t<pokemon-name [pokemon]=\"pokemon\" ></pokemon-name>\n        \t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['Pokemon', { name: pokemon.name }]\">\n\t\t\t\t\t\t\t\t<pokemon-image [pokemon]=\"pokemon\" ></pokemon-image>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<pokemon-type [pokemon]=\"pokemon\"></pokemon-type>\n\t\t\t\t\t\t\t</div>\n        \t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_2.RouteParams])
                ], PokedexComponent);
                return PokedexComponent;
            }());
            exports_1("PokedexComponent", PokedexComponent);
        }
    }
});
//# sourceMappingURL=pokedex.component.js.map