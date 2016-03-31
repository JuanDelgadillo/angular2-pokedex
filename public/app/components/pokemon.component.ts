import {Component} from 'angular2/core'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { CommentsComponent } from './comments.component'
import { PokemonDataComponent } from './pokemon-data.component'
import { PokemonNameComponent } from './pokemon-name.component'
import { PokemonImageComponent } from './pokemon-image.component'
import { PokemonStatsComponent } from './pokemon-stats.component'
import { PokemonEvolutionComponent } from './pokemon-evolution.component'

@Component({
  selector: 'pokemon',
  pipes: [ImageifyPipe],
  directives:[CommentsComponent, PokemonDataComponent, PokemonNameComponent, PokemonImageComponent, PokemonStatsComponent, PokemonEvolutionComponent],
  template: `
    <div class="container-fluid">
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
              <li [ngClass]="{ 'active': tab === 1 }"><a href="#" (click)="selectTab(1)">Pokédex</a></li>
              <li [ngClass]="{ 'active': tab === 2 }"><a href="#" (click)="selectTab(2)">Stats</a></li>
              <li [ngClass]="{ 'active': tab === 3 }"><a href="#" (click)="selectTab(3)">Evolution</a></li>
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
    </div>
  `
})

export class PokemonComponent {
  tab = 1

  pokemon = {
      id: "001",
      name: "Bulbasaur",
      species: "Seed Pokémon",
      type: [ "Grass", "Poison" ],
      height: "2′4″ (0.71m)",
      weight: "15.2 lbs (6.9 kg)",
      abilities: [ "Overgrow", "Chlorophyll"],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        "sp.atk": 65,
        "sp.def": 65,
        speed: 45,
        total: 318
      },
      evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
    }
  selectTab = tab => this.tab = tab
}