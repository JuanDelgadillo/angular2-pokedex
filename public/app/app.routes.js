"use strict";
var router_1 = require('@angular/router');
var pokemon_component_1 = require('./components/pokemon.component');
var pokedex_component_1 = require('./components/pokedex.component');
var routes = [
    {
        path: 'pokedex',
        component: pokedex_component_1.PokedexComponent,
    },
    {
        path: 'pokedex/pokemons/type/:type',
        component: pokedex_component_1.PokedexComponent
    },
    {
        path: 'pokemon/:name',
        component: pokemon_component_1.PokemonComponent
    },
    {
        path: '',
        redirectTo: 'pokedex',
        pathMatch: 'full'
    },
];
exports.AppRouting = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map