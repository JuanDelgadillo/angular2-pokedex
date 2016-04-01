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
    			<h1>Pokédex <small class="pull-right" [style.marginTop]="'20px'">Showing <span class="badge">{{pokemons.length}}</span> Pokémons</small></h1>
				<h2 *ngIf="pokemonType"><span class="label type-{{pokemonType | lowercase}}">{{pokemonType}}</span></h2>
  			</div>
			<div class="row" *ngFor="#group of groupped">
				<div class="col-lg-3" *ngFor="#pokemon of group">
					<div class="pokemon panel panel-primary">
						<div class="panel-heading">
          					<pokemon-name [pokemon]="pokemon" ></pokemon-name>
        				</div>
						<div class="panel-body">
							<a [routerLink]="['Pokemon', { name: pokemon.name }]">
								<pokemon-image [pokemon]="pokemon" ></pokemon-image>
							</a>
						</div>
						<div class="panel-footer">
							<div class="text-center">
								<pokemon-type [pokemon]="pokemon"></pokemon-type>
							</div>
        				</div>
					</div>
				</div>
			</div>
		</div>
	`
})

export class PokedexComponent {
	pokemons = []
	pokemonType:string
	groupped
	
	constructor (
		private _pokemonService: PokemonService,
		private _routeParams: RouteParams) {
		if (this._routeParams.params.type) {
			this.pokemonType = this._routeParams.get('type')
			this._pokemonService.getPokemonsByType(this.pokemonType)
				.subscribe(pokemons => {
					this.pokemons = pokemons
					this.groupped = this.partition(pokemons, 4)
				})
		} else {
			this._pokemonService.getPokemons()
			.subscribe(pokemons => {
				this.pokemons = pokemons
				this.groupped = this.partition(pokemons, 4)
			})
		}
		
	}
	
	partition = (data, n) => {
		return _.chain(data).groupBy((element, index) => Math.floor(index / n)).toArray().value()
	}
	
}