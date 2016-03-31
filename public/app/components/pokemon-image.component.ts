import { Component, Input } from 'angular2/core'
import { ImageifyPipe } from '../pipes/imageify.pipe'

@Component({
	selector: 'pokemon-image',
	pipes: [ImageifyPipe],
	template: `
		<img class="avatar center-block" src="{{pokemon.name | imageify}}">
	`
})

export class PokemonImageComponent {
	@Input() pokemon:Object = {}
}