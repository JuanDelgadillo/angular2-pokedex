import { Component, Input } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
	selector: 'pokemon-type',
	directives: [ROUTER_DIRECTIVES],
	template: `
	<a [routerLink]="['PokedexPokemonsByType', { type: type }]" *ngFor="#type of pokemon.type">
		<span class="label type type-{{type | lowercase}}" >
        	{{type}}
        </span>
	</a>
	`
})

export class PokemonTypeComponent {
	@Input() pokemon:Object = {}
}