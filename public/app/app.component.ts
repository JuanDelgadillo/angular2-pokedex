import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {PokemonComponent} from './components/pokemon.component'
import {PokedexNavbarComponent} from './components/pokedex-navbar.component'
import {PokedexComponent} from './components/pokedex.component'

 @RouteConfig([
     { path: '/pokedex/',  name: 'Pokedex', component: PokedexComponent, useAsDefault: true },
     { path: '/pokedex/pokemons/type/:type',  name: 'PokedexPokemonsByType', component: PokedexComponent },
     { path: '/pokemon/:name', name: 'Pokemon', component: PokemonComponent },
     { path: '/*other', name: 'Other', redirectTo: ['Pokedex'] }
 ])

@Component({
    selector: 'my-app',
    template: `
          <pokedex-navbar></pokedex-navbar>
          <div class="container-fluid">
            <router-outlet></router-outlet>
          </div>
          `,
    directives: [PokedexNavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}