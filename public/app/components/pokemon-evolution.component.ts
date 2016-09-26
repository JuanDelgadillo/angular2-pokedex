import { Component, Input } from '@angular/core'

@Component({
	selector: 'pokemon-evolution',
	templateUrl: './pokemon-evolution.component.html'
})

export class PokemonEvolutionComponent {
	@Input() pokemon:any = {}
}