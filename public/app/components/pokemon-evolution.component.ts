import { Component, Input } from 'angular2/core'
import { ImageifyPipe } from '../pipes/imageify.pipe'

@Component({
	selector: 'pokemon-evolution',
	pipes: [ImageifyPipe],
	template: `
		<div class="text-center" *ngFor="#evolution of pokemon.evolution, #last = last">
                  <a href="#">
                    <img src="{{evolution | imageify}}" width="160">
                    <p>
                      <strong>{{evolution}}</strong>
                    </p>
                  </a>
                  <span *ngIf="!last" class="glyphicon glyphicon-arrow-down"></span>
                </div>
	`
})

export class PokemonEvolutionComponent {
	@Input() pokemon:Object = {}
}