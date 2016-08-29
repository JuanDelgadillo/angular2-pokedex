import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { CommentsComponent } from './comments.component'
import { PokemonDataComponent } from './pokemon-data.component'
import { PokemonNameComponent } from './pokemon-name.component'
import { PokemonImageComponent } from './pokemon-image.component'
import { PokemonStatsComponent } from './pokemon-stats.component'
import { PokemonEvolutionComponent } from './pokemon-evolution.component'
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'pokemon',
  pipes: [ImageifyPipe],
  providers: [PokemonService],
  directives:[CommentsComponent, PokemonDataComponent, PokemonNameComponent, PokemonImageComponent, PokemonStatsComponent, PokemonEvolutionComponent],
  template: `
      <!-- pokemon -->
        <div class="page-header">
          <pokemon-name [pokemon]="pokemon"></pokemon-name>
        </div>
        <div class="row">
          <div class="col-md-6">
            <pokemon-image [pokemon]="pokemon"></pokemon-image>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-tabs nav-justified">
              <li [ngClass]="{ 'active': tab === 1 }"><a (click)="selectTab(1)">Pokédex</a></li>
              <li [ngClass]="{ 'active': tab === 2 }"><a (click)="selectTab(2)">Stats</a></li>
              <li [ngClass]="{ 'active': tab === 3 }"><a (click)="selectTab(3)">Evolution</a></li>
            </ul>
            <div class="tab-content">
              <div *ngIf="tab === 1">
                <pokemon-data [pokemon]="pokemon"></pokemon-data>
              </div>

              <!-- Stats -->
              <div *ngIf="tab === 2">
                <pokemon-stats [pokemon]="pokemon"></pokemon-stats>
              </div>

              <!-- Evolution -->
              <div *ngIf="tab === 3">
                <pokemon-evolution [pokemon]="pokemon"></pokemon-evolution>
              </div>

            </div>
          </div>
        </div>
      <!-- /pokemon -->
      <comments [pokemon]="pokemon"></comments>
  `
})

export class PokemonComponent implements OnInit {
  pokemon = {}
  tab = 1
  
  constructor (
    private _pokemonService: PokemonService,
    private _routeParams: ActivatedRoute) {
  }

  ngOnInit () {
    this._routeParams.params.map(params => params.name).subscribe(pokemonName => { 
      this._pokemonService.getPokemonByName(pokemonName)
        .subscribe(pokemon => this.pokemon = pokemon[0])
    })
  }
  
  selectTab = tab => this.tab = tab
}