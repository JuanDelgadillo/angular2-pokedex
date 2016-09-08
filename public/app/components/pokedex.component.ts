import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../services/pokemon.service'
import * as _ from '_'

@Component({
	selector: 'pokedex',
	providers: [PokemonService],
	template: `
		<div>
  			<div class="page-header">
    			<h1>Pokédex <small class="pull-right">Showing <span class="badge">{{pokemons.length}}</span> Pokémons</small></h1>
				<h2 *ngIf="pokemonType"><span class="label type-{{pokemonType | lowercase}}">{{pokemonType}}</span></h2>
  			</div>
			<div class="row" *ngFor="let group of groupped">
				<div class="col-lg-3" *ngFor="let pokemon of group">
					<div class="pokemon panel panel-primary">
						<div class="panel-heading">
          					<pokemon-name [pokemon]="pokemon" ></pokemon-name>
        				</div>
						<div class="panel-body">
							<a [routerLink]="['/pokemon', pokemon.name ]">
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

export class PokedexComponent implements OnInit {
	pokemons = []
	pokemonType:string
	groupped
	
	constructor (
		private _pokemonService: PokemonService,
		private _routeParams: ActivatedRoute) {
		
	}

	ngOnInit() {
		this._routeParams.params.map(params => params.type).subscribe(pokemonType => {
			if (pokemonType) {
				this._pokemonService.getPokemonsByType(pokemonType)
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
		})
	}
	
	partition = (data, n) => {
		return _.chain(data).groupBy((element, index) => Math.floor(index / n)).toArray().value()
	}
	
}