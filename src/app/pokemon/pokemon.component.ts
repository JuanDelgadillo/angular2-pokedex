import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'app/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  pokemon = {};
  tab = 1;

  constructor(
    private _pokemonService: PokemonService,
    private _routeParams: ActivatedRoute
  ) { }

  ngOnInit() {
    this._routeParams.params.map((params:any) => params.name).subscribe(pokemonName => {
      this._pokemonService.getPokemonByName(pokemonName)
        .subscribe(pokemon => this.pokemon = pokemon[0])
    })
  }

  selectTab = tab => this.tab = tab

}
