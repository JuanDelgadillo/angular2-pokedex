import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PokedexComponent } from './components/pokedex.component';
import { PokemonComponent } from './components/pokemon.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NgModule, provide, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routes'

enableProdMode();

@NgModule({
  imports:      [
  	BrowserModule,
  	appRouting,
  	FormsModule,
  	HttpModule
  ],
  declarations: [
  	AppComponent,
  	PokedexComponent,
  	PokemonComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
		provide(LocationStrategy, { useClass: HashLocationStrategy }) 
	]
})

export class AppModule { }
