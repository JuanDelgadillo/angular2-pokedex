import { Component } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { PokemonService } from '../services/pokemon.service'

@Component({
	selector: 'pokedex',
	pipes: [ImageifyPipe],
	providers: [PokemonService, HTTP_PROVIDERS],
	template: `
		<div>
  			<div class="page-header">
    		<h1>Pokédex</h1>
  			</div>
			<div *ngFor="#pokemon of pokemons">
				<h1>{{pokemon.name}} <small>{{pokemon.species}}</small></h1>
				<img src="{{pokemon.name | imageify}}">
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