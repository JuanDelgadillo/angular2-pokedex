import { Component, Input} from '@angular/core'

@Component({
	selector: 'pokemon-name',
	template: `
		<h1>
      {{pokemon.name}}
      <small>{{pokemon.species}}</small>
      <span class="label label-primary pull-right">#{{pokemon.id}}</span>
    </h1>
	`
})

export class PokemonNameComponent {
	@Input() pokemon:any = {}
}