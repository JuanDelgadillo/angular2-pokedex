import { Component, Input } from '@angular/core'

@Component({
	selector: 'pokemon-type',
	template: `
	<a [routerLink]="['/pokedex/pokemons/type', type ]" *ngFor="let type of pokemon.type">
		<span class="label type type-{{type | lowercase}}" >
        	{{type}}
        </span>
	</a>
	`
})

export class PokemonTypeComponent {
	@Input() pokemon:Object = {}
}