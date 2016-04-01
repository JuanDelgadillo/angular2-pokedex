import { Component, Input } from 'angular2/core'

@Component({
	selector: 'pokemon-type',
	template: `
		<span class="label type type-{{type | lowercase}}" *ngFor="#type of pokemon.type">
        	{{type}}
        </span>
	`
})

export class PokemonTypeComponent {
	@Input() pokemon:Object = {}
}