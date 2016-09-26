import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../services/pokemon.service'
import * as underscore from 'underscore'

@Component({
	selector: 'pokedex',
	providers: [PokemonService],
	templateUrl: './pokedex.component.html'
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
		this._routeParams.params.map((params:any) => params.type).subscribe(pokemonType => {
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
    let _underscore = (underscore.chain) ? underscore : _; 
		return _underscore.chain(data).groupBy((element, index) => Math.floor(index / n)).toArray().value()
	}
	
}