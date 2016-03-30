import {Component} from 'angular2/core'

@Component({
  selector: 'pokedex-navbar',
  template: `
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="public/assets/img/logo.png">
            Pokédex
          </a>
        </div>
      </div>
    </div>
  `
})

export class PokedexNavbarComponent {}