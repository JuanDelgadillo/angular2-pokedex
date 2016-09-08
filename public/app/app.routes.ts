import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './components/pokemon.component';
import { PokedexComponent } from './components/pokedex.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexComponent,
  },
  {
    path: 'pokedex/pokemons/type/:type',
    component: PokedexComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonComponent
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  },
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: true });