import {Component} from 'angular2/core'
import {PokemonComponent} from './components/pokemon.component'
import {PokedexNavbarComponent} from './components/pokedex-navbar.component'

@Component({
    selector: 'my-app',
    template: `
          <pokedex-navbar></pokedex-navbar>
          <pokemon></pokemon>
          `,
    directives: [PokemonComponent, PokedexNavbarComponent]
})
export class AppComponent {
}