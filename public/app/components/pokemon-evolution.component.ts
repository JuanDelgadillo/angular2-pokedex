import { Component, Input } from 'angular2/core'
import { ImageifyPipe } from '../pipes/imageify.pipe'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
	selector: 'pokemon-evolution',
	pipes: [ImageifyPipe],
  directives: [ROUTER_DIRECTIVES],
	template: `
		<div class="text-center" *ngFor="#evolution of pokemon.evolution, #last = last">
                  <a [routerLink]="['Pokemon', { name: evolution }]">
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