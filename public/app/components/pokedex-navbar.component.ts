import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
  selector: 'pokedex-navbar',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['Pokedex']">
            <img src="public/assets/img/logo.png">
            Pokédex
          </a>
        </div>
      </div>
    </div>
  `
})

export class PokedexNavbarComponent {}