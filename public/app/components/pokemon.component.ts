import {Component} from 'angular2/core'

@Component({
  selector: 'pokemon',
  template: `
    <div class="container">
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
            <img class="avatar center-block" src="public/assets/img/pokemons/{{pokemon.name | lowercase}}.jpg">
          </div>
          <div class="col-md-6">
            <ul class="nav nav-tabs nav-justified">
              <li class="active"><a href="#">Pokédex</a></li>
              <li><a href="#">Stats</a></li>
              <li><a href="#">Evolution</a></li>
            </ul>
            <div class="tab-content">
              <div>
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
              <div>
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
              <div>
                <div class="text-center" *ngFor="#evolution of pokemon.evolution, #last = last">
                  <a href="#">
                    <img src="public/assets/img/pokemons/{{evolution | lowercase}}.jpg" width="160">
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
    </div>
  `
})

export class PokemonComponent {
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
}