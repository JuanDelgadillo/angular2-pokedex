import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'app/common';
import { chain } from 'underscore';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  providers: [PokemonService]
})
export class PokedexComponent implements OnInit {

  pokemons = [];
  pokemonType: string;
  groupped;

  constructor(
    private _pokemonService: PokemonService,
    private _routeParams: ActivatedRoute
  ) { }

  ngOnInit() {
    this._routeParams.params.map((params:any) => params.type).subscribe(pokemonType => {
      if (pokemonType) {
        this._pokemonService.getPokemonsByType(pokemonType)
          .subscribe(pokemons => {
            this.pokemons = pokemons;
            this.groupped = this.partition(pokemons, 4);
          })
      } else {
        this._pokemonService.getPokemons()
        .subscribe(pokemons => {
          this.pokemons = pokemons;
          this.groupped = this.partition(pokemons, 4);
        })
      }
    });
  }

  partition = (data, n) => {
    return chain(data).groupBy((element, index) => Math.floor(index / n)).toArray().value()
  }

}
