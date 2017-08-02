import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CommonModule } from './common';

import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { PokemonCommentsComponent } from './pokemon-comments/pokemon-comments.component';
import { PokedexNavbarComponent } from './pokedex-navbar/pokedex-navbar.component';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonEvolutionComponent,
    PokemonCommentsComponent,
    PokedexNavbarComponent,
    PokemonImageComponent,
    PokemonStatsComponent,
    PokemonTypeComponent,
    PokemonDataComponent,
    PokemonNameComponent,
    PokedexComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
