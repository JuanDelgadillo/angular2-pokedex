import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PokemonService {
	private _resource = 'public/data/pokemons.json'
	private _localStorage = window.localStorage
	
	constructor (private _http: Http) {
		
	}
	
	getPokemons () {
		return this._http.get(this._resource)
			.map(res => res.json());
	}
	
	getPokemonByName (name:string) {
		return Observable.create((observer) => {
			this.getPokemons()
				.subscribe(pokemons => {
					let pokemon = pokemons.filter((pokemon) => pokemon.name === name)
					observer.next(pokemon)
					observer.complete()	
				})
		}) 
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
	
	saveComment (pokemon, comment) {
		let comments = this.getComments(pokemon)
		
		comments.push(comment)
		this._localStorage.setItem(pokemon, JSON.stringify(comments))
	}
	
	getComments (pokemon) {
		var comments = this._localStorage.getItem(pokemon)
		(!comments) ? comments = [] : comments = JSON.parse(comments)
		return comments
	}
}