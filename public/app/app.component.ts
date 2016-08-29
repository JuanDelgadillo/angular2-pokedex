import { Component } from '@angular/core'
import { PokedexNavbarComponent } from './components/pokedex-navbar.component'

@Component({
    selector: 'pokeapp',
    template: `
          <pokedex-navbar></pokedex-navbar>
          <div class="container-fluid">
            <router-outlet></router-outlet>
          </div>
          `,
    directives: [PokedexNavbarComponent]
})
export class AppComponent {
}