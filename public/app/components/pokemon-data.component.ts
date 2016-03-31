import { Component, Input } from 'angular2/core'

@Component({
	selector: 'pokemon-data',
	template: `
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
	`
})

export class PokemonDataComponent {
  @Input() pokemon:Object = {}
}