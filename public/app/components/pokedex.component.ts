import { Component } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { RouteParams } from 'angular2/router'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { PokemonService } from '../services/pokemon.service'
import { PokemonNameComponent } from './pokemon-name.component'
import { PokemonImageComponent } from './pokemon-image.component'
import { PokemonTypeComponent } from './pokemon-type.component'

@Component({
	selector: 'pokedex',
	pipes: [ImageifyPipe],
	directives: [PokemonNameComponent, PokemonImageComponent, PokemonTypeComponent, ROUTER_DIRECTIVES],
	providers: [PokemonService, HTTP_PROVIDERS],
	template: `
		<div>
  			<div class="page-header">
    			<h1>Pokédex <small class="pull-right">Showing <span class="badge">{{pokemons.length}}</span> Pokémons</small></h1>
				<h2 *ngIf="pokemonType"><span class="label type-{{pokemonType | lowercase}}">{{pokemonType}}</span></h2>
  			</div>
			<div class="pokemon" *ngFor="#pokemon of pokemons">
				<a [routerLink]="['Pokemon', { name: pokemon.name }]">
					<pokemon-name [pokemon]="pokemon" ></pokemon-name>
					<pokemon-image [pokemon]="pokemon" ></pokemon-image>
					<div class="text-center">
				      <pokemon-type [pokemon]="pokemon"></pokemon-type>
				    </div>
				</a>
			</div>
		</div>
	`
})

export class PokedexComponent {
	pokemons = []
	pokemonType:string
	constructor (
		private _pokemonService: PokemonService,
		private _routeParams: RouteParams) {
		if (this._routeParams.params.type) {
			this.pokemonType = this._routeParams.get('type')
			this._pokemonService.getPokemonsByType(this.pokemonType).subscribe(pokemons => this.pokemons = pokemons)
			//this._pokemonService.getPokemonsByType(pokemonType)
			//.subscribe(pokemons => this.pokemons = pokemons)
		} else {
			this._pokemonService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons)
		}
		
	}
	
}