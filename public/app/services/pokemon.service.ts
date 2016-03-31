import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core'

@Injectable()
export class PokemonService {
	private _resource = 'public/data/pokemons.json'
	
	constructor (private _http: Http) {
		
	}
	
	getPokemons () {
		return this._http.get(this._resource)
			.map(res => res.json());
	}
}