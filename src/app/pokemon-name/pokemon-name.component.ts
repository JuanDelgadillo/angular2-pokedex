import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-name',
  templateUrl: './pokemon-name.component.html'
})
export class PokemonNameComponent {

  @Input() pokemon:any = {};

}
