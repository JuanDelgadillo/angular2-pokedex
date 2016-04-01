import { Component } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { PokemonService } from '../services/pokemon.service'
import { PokemonNameComponent } from './pokemon-name.component'
import { PokemonImageComponent } from './pokemon-image.component'

@Component({
	selector: 'pokedex',
	pipes: [ImageifyPipe],
	directives: [PokemonNameComponent, PokemonImageComponent],
	providers: [PokemonService, HTTP_PROVIDERS],
	template: `
		<div>
  			<div class="page-header">
    		<h1>Pokédex</h1>
  			</div>
			<div *ngFor="#pokemon of pokemons">
				<pokemon-name [pokemon]="pokemon" ></pokemon-name>
				<pokemon-image [pokemon]="pokemon" ></pokemon-image>
			</div>
		</div>
	`
})

export class PokedexComponent {
	pokemons = []
	
	constructor (private _pokemonService: PokemonService) {
		this._pokemonService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons)
		
	}
	
}