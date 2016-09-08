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
var pokemon_evolution_component_1 = require('./components/pokemon-evolution.component');
var pokedex_navbar_component_1 = require('./components/pokedex-navbar.component');
var pokemon_image_component_1 = require('./components/pokemon-image.component');
var pokemon_stats_component_1 = require('./components/pokemon-stats.component');
var pokemon_name_component_1 = require('./components/pokemon-name.component');
var pokemon_type_component_1 = require('./components/pokemon-type.component');
var pokemon_data_component_1 = require('./components/pokemon-data.component');
var comments_component_1 = require('./components/comments.component');
var pokedex_component_1 = require('./components/pokedex.component');
var pokemon_component_1 = require('./components/pokemon.component');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var imageify_pipe_1 = require('./pipes/imageify.pipe');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
core_1.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.AppRouting,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pokedex_component_1.PokedexComponent,
                pokemon_component_1.PokemonComponent,
                pokemon_evolution_component_1.PokemonEvolutionComponent,
                pokedex_navbar_component_1.PokedexNavbarComponent,
                pokemon_name_component_1.PokemonNameComponent,
                pokemon_stats_component_1.PokemonStatsComponent,
                pokemon_image_component_1.PokemonImageComponent,
                pokemon_type_component_1.PokemonTypeComponent,
                pokemon_data_component_1.PokemonDataComponent,
                comments_component_1.CommentsComponent,
                imageify_pipe_1.ImageifyPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map