import { Component } from '@angular/core'

@Component({
    selector: 'pokeapp',
    template: `
          <pokedex-navbar></pokedex-navbar>
          <div class="container-fluid">
            <router-outlet></router-outlet>
          </div>
          `
})
export class AppComponent {
}