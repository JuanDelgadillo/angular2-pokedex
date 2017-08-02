import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-image',
  templateUrl: './pokemon-image.component.html'
})
export class PokemonImageComponent {

  @Input() pokemon:any = {};

}
