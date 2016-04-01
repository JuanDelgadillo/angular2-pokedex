import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PokemonService {
	private _resource = 'public/data/pokemons.json'
	
	constructor (private _http: Http) {
		
	}
	
	getPokemons () {
		return this._http.get(this._resource)
			.map(res => res.json());
	}
	
	getPokemonByName (name:string) {
		return this.getPokemons()
			.filter((pokemon) => pokemon.name === name)
	}
	
	getPokemonsByType (type:string) {
		return Observable.create((observer) => {
			this.getPokemons()
			.subscribe(pokemons => {
				let results = pokemons.filter(pokemon => pokemon.type.some(t => t === type ))
				observer.next(results)
				observer.complete()
			})
		})
			
	}
}