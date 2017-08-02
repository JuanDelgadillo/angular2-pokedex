import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';

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

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
