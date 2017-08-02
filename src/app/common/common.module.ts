import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokemonService } from './pokemon/pokemon.service';
import { ImageifyPipe } from './imageify/imageify.pipe';

@NgModule({
  imports: [
    NgCommonModule
  ],
  declarations: [
    ImageifyPipe
  ],
  exports: [
    ImageifyPipe
  ],
  providers: [
    PokemonService
  ]
})
export class CommonModule { }
