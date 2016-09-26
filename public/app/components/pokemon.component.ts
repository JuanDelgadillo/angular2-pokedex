import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'pokemon',
  providers: [PokemonService],
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {
  pokemon = {}
  tab = 1
  
  constructor (
    private _pokemonService: PokemonService,
    private _routeParams: ActivatedRoute) {
  }

  ngOnInit () {
    this._routeParams.params.map((params:any) => params.name).subscribe(pokemonName => { 
      this._pokemonService.getPokemonByName(pokemonName)
        .subscribe(pokemon => this.pokemon = pokemon[0])
    })
  }
  
  selectTab = tab => this.tab = tab
}