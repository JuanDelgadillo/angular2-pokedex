import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const RESOURCE_ENDPOINT = 'assets/data/pokemons.json';

@Injectable()
export class PokemonService {

  constructor (private http: Http) { }

  getPokemons () {
    return this.http.get(RESOURCE_ENDPOINT)
      .map(res => res.json());
  }

  getPokemonByName (name: string) {
    return Observable.create((observer) => {
      this.getPokemons()
        .subscribe(pokemons => {
          let pokemon = pokemons.filter((pokemon) => pokemon.name === name)
          observer.next(pokemon)
          observer.complete()
        })
    })
  }

  getPokemonsByType (type: string) {
    return Observable.create((observer) => {
      this.getPokemons()
      .subscribe(pokemons => {
        let results = pokemons.filter(pokemon => pokemon.type.some(t => t === type ))
        observer.next(results)
        observer.complete()
      })
    })
  }

  saveComment (pokemon, comment) {
    let comments = this.getComments(pokemon)

    comments.push(comment)
    localStorage.setItem(pokemon, JSON.stringify(comments))
  }

  getComments (pokemon) {
    let comments:any = [];
    comments = localStorage.getItem(pokemon)
    if (!comments)
      comments = []
    else
      comments = JSON.parse(comments)
    return comments
  }
}
