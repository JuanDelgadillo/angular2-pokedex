import { Component, Input } from '@angular/core'

@Component({
	selector: 'pokemon-data',
	templateUrl: './pokemon-data.component.html'
})

export class PokemonDataComponent {
  @Input() pokemon:any = {}
}