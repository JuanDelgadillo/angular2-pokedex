System.register(['angular2/core', 'angular2/http', 'angular2/router', '../pipes/imageify.pipe', './comments.component', './pokemon-data.component', './pokemon-name.component', './pokemon-image.component', './pokemon-stats.component', './pokemon-evolution.component', '../services/pokemon.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, imageify_pipe_1, comments_component_1, pokemon_data_component_1, pokemon_name_component_1, pokemon_image_component_1, pokemon_stats_component_1, pokemon_evolution_component_1, pokemon_service_1;
    var PokemonComponent;
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
            },
            function (imageify_pipe_1_1) {
                imageify_pipe_1 = imageify_pipe_1_1;
            },
            function (comments_component_1_1) {
                comments_component_1 = comments_component_1_1;
            },
            function (pokemon_data_component_1_1) {
                pokemon_data_component_1 = pokemon_data_component_1_1;
            },
            function (pokemon_name_component_1_1) {
                pokemon_name_component_1 = pokemon_name_component_1_1;
            },
            function (pokemon_image_component_1_1) {
                pokemon_image_component_1 = pokemon_image_component_1_1;
            },
            function (pokemon_stats_component_1_1) {
                pokemon_stats_component_1 = pokemon_stats_component_1_1;
            },
            function (pokemon_evolution_component_1_1) {
                pokemon_evolution_component_1 = pokemon_evolution_component_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            }],
        execute: function() {
            PokemonComponent = (function () {
                function PokemonComponent(_pokemonService, _routeParams) {
                    var _this = this;
                    this._pokemonService = _pokemonService;
                    this._routeParams = _routeParams;
                    this.pokemon = {};
                    this.tab = 1;
                    this.selectTab = function (tab) { return _this.tab = tab; };
                    this._pokemonService.getPokemonByName(this._routeParams.get('name'))
                        .subscribe(function (pokemon) { return _this.pokemon = pokemon[0]; });
                }
                PokemonComponent = __decorate([
                    core_1.Component({
                        selector: 'pokemon',
                        pipes: [imageify_pipe_1.ImageifyPipe],
                        providers: [pokemon_service_1.PokemonService, http_1.HTTP_PROVIDERS],
                        directives: [comments_component_1.CommentsComponent, pokemon_data_component_1.PokemonDataComponent, pokemon_name_component_1.PokemonNameComponent, pokemon_image_component_1.PokemonImageComponent, pokemon_stats_component_1.PokemonStatsComponent, pokemon_evolution_component_1.PokemonEvolutionComponent],
                        template: "\n      <!-- pokemon -->\n        <div class=\"page-header\">\n          <pokemon-name [pokemon]=\"pokemon\"></pokemon-name>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <pokemon-image [pokemon]=\"pokemon\"></pokemon-image>\n          </div>\n          <div class=\"col-md-6\">\n            <ul class=\"nav nav-tabs nav-justified\">\n              <li [ngClass]=\"{ 'active': tab === 1 }\"><a (click)=\"selectTab(1)\">Pok\u00E9dex</a></li>\n              <li [ngClass]=\"{ 'active': tab === 2 }\"><a (click)=\"selectTab(2)\">Stats</a></li>\n              <li [ngClass]=\"{ 'active': tab === 3 }\"><a (click)=\"selectTab(3)\">Evolution</a></li>\n            </ul>\n            <div class=\"tab-content\">\n              <div *ngIf=\"tab === 1\">\n                <pokemon-data [pokemon]=\"pokemon\"></pokemon-data>\n              </div>\n\n              <!-- Stats -->\n              <div *ngIf=\"tab === 2\">\n                <pokemon-stats [pokemon]=\"pokemon\"></pokemon-stats>\n              </div>\n\n              <!-- Evolution -->\n              <div *ngIf=\"tab === 3\">\n                <pokemon-evolution [pokemon]=\"pokemon\"></pokemon-evolution>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      <!-- /pokemon -->\n      <comments [pokemon]=\"pokemon\"></comments>\n  "
                    }), 
                    __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.RouteParams])
                ], PokemonComponent);
                return PokemonComponent;
            }());
            exports_1("PokemonComponent", PokemonComponent);
        }
    }
});
//# sourceMappingURL=pokemon.component.js.map