import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-stats',
  templateUrl: './pokemon-stats.component.html'
})
export class PokemonStatsComponent {

  @Input() pokemon:any = {};

}
