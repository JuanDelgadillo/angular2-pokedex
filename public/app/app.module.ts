import { PokemonEvolutionComponent } from './components/pokemon-evolution.component';
import { PokedexNavbarComponent } from './components/pokedex-navbar.component';
import { PokemonImageComponent } from './components/pokemon-image.component';
import { PokemonStatsComponent } from './components/pokemon-stats.component';
import { PokemonNameComponent } from './components/pokemon-name.component';
import { PokemonTypeComponent } from './components/pokemon-type.component';
import { PokemonDataComponent } from './components/pokemon-data.component';
import { CommentsComponent } from './components/comments.component';
import { PokedexComponent } from './components/pokedex.component';
import { PokemonComponent } from './components/pokemon.component';
import { BrowserModule } from '@angular/platform-browser';
import { ImageifyPipe } from './pipes/imageify.pipe';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routes'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonEvolutionComponent,
    PokedexNavbarComponent,
    PokemonNameComponent,
    PokemonStatsComponent,
    PokemonImageComponent,
    PokemonTypeComponent,
    PokemonDataComponent,
    CommentsComponent,
    ImageifyPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
