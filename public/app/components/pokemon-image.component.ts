import { Component, Input } from '@angular/core'

@Component({
	selector: 'pokemon-image',
	template: `<img class="avatar center-block" src="{{pokemon.name | imageify}}">`
})

export class PokemonImageComponent {
	@Input() pokemon:any = {}
}