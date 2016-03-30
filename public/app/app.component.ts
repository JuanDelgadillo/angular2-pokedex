import {Component} from 'angular2/core'
import {PokemonComponent} from './components/pokemon.component'

@Component({
    selector: 'my-app',
    template: `
          <pokemon></pokemon>
          `,
    directives: [PokemonComponent]
})
export class AppComponent {
}