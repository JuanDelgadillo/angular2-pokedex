import {Component} from 'angular2/core'
import { ImageifyPipe } from '../pipes/imageify.pipe'

@Component({
  selector: 'pokemon',
  pipes: [ImageifyPipe],
  template: `
    <div class="container-fluid">
      <!-- pokemon -->
        <div class="page-header">
          <h1>
            {{pokemon.name}}
            <small>{{pokemon.species}}</small>
            <span class="label label-primary pull-right">#{{pokemon.id}}</span>
          </h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img class="avatar center-block" src="{{pokemon.name | imageify}}">
          </div>
          <div class="col-md-6">
            <ul class="nav nav-tabs nav-justified">
              <li [ngClass]="{ 'active': tab === 1 }"><a href="#" (click)="selectTab(1)">Pokédex</a></li>
              <li [ngClass]="{ 'active': tab === 2 }"><a href="#" (click)="selectTab(2)">Stats</a></li>
              <li [ngClass]="{ 'active': tab === 3 }"><a href="#" (click)="selectTab(3)">Evolution</a></li>
            </ul>
            <div class="tab-content">
              <div *ngIf="tab === 1">
                <ul class="list-group">
                  <li class="list-group-item">
                    <strong>Type</strong>
                    <span class="pull-right">
                      <span class="label type type-{{type | lowercase}}" *ngFor="#type of pokemon.type">
                        {{type}}
                      </span>
                    </span>
                  </li>
                  <li class="list-group-item">
                    <strong>Height</strong>
                    <span class="pull-right">{{pokemon.height}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Weight</strong>
                    <span class="pull-right">{{pokemon.weight}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Abilities</strong>
                    <ul>
                      <li *ngFor="#ability of pokemon.abilities">
                        {{ ability }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <!-- Stats -->
              <div *ngIf="tab === 2">
                <ul class="list-group">
                  <li class="list-group-item">
                    <strong>HP</strong>
                    <span class="badge">{{ pokemon.stats.hp}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Attack</strong>
                    <span class="badge">{{ pokemon.stats.attack}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Defense</strong>
                    <span class="badge">{{ pokemon.stats.defense}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Special Attack</strong>
                    <span class="badge">{{ pokemon.stats['sp.atk']}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Special Defense</strong>
                    <span class="badge">{{ pokemon.stats['sp.def']}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Speed</strong>
                    <span class="badge">{{ pokemon.stats.speed}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Total</strong>
                    <span class="badge">{{ pokemon.stats.total}}</span>
                  </li>
                </ul>
              </div>

              <!-- Evolution -->
              <div *ngIf="tab === 3">
                <div class="text-center" *ngFor="#evolution of pokemon.evolution, #last = last">
                  <a href="#">
                    <img src="{{evolution | imageify}}" width="160">
                    <p>
                      <strong>{{evolution}}</strong>
                    </p>
                  </a>
                  <span *ngIf="!last" class="glyphicon glyphicon-arrow-down"></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      <!-- /pokemon -->
      <!-- comments -->
        <button class="btn btn-primary">Show comments <span class="badge">2</span></button>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h1 class="panel-title">Comments <button class="close pull-right">&times;</button></h1>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-sm-6">
                  <textarea placeholder="Please tell us what do you think about {{ pokemon.name}}" class="form-control"></textarea>
                </div>
                <div class="col-sm-4">
                  <input type="email" placeholder="Please enter your email address" class="form-control">
                  <label>
                    <input id="anonymous" type="checkbox">
                    Anonymous
                  </label>
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-lg">Comment</button>
                </div>
              </div>
            </form>
            <blockquote>
              <p>OMG Bulbasaur is AMAZING!!!</p>
              <footer>
                Comment by <a href="mailto:pepe@pepe.com">pepe@pepe.com</a> on <span>Sep 12, 2014, 11:00:00 PM</span>
              </footer>
            </blockquote>
            <blockquote>
              <p>Nah, I hate it -_-</p>
              <footer>
                Comment by <em>Anonymous</em> on <span>Sep 12, 2014, 11:00:00 PM</span>
              </footer>
            </blockquote>
          </div>
        </div>
        <!-- /comments -->
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