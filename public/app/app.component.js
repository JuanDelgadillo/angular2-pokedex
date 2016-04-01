System.register(['angular2/core', 'angular2/router', './components/pokemon.component', './components/pokedex-navbar.component', './components/pokedex.component'], function(exports_1, context_1) {
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
    var core_1, router_1, pokemon_component_1, pokedex_navbar_component_1, pokedex_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pokemon_component_1_1) {
                pokemon_component_1 = pokemon_component_1_1;
            },
            function (pokedex_navbar_component_1_1) {
                pokedex_navbar_component_1 = pokedex_navbar_component_1_1;
            },
            function (pokedex_component_1_1) {
                pokedex_component_1 = pokedex_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/pokedex/', name: 'Pokedex', component: pokedex_component_1.PokedexComponent, useAsDefault: true },
                        { path: '/pokedex/pokemons/type/:type', name: 'PokedexPokemonsByType', component: pokedex_component_1.PokedexComponent },
                        { path: '/pokemon/:name', name: 'Pokemon', component: pokemon_component_1.PokemonComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Pokedex'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n          <pokedex-navbar></pokedex-navbar>\n          <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n          </div>\n          ",
                        directives: [pokedex_navbar_component_1.PokedexNavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map