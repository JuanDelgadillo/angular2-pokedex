import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-type',
  templateUrl: './pokemon-type.component.html'
})
export class PokemonTypeComponent {

  @Input() pokemon:any = {};

}
