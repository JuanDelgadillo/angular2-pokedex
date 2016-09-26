import {Component, Input, AfterContentChecked} from '@angular/core'
import { PokemonService } from '../services/pokemon.service'

@Component({
	selector: 'comments',
  providers: [PokemonService],
	templateUrl: './comments.component.html'
})

export class CommentsComponent implements AfterContentChecked {
  comment:any = {}
  @Input() pokemon:any = {}
	comments = []
	show:boolean = false
	toggle:Function = () => this.show = !this.show
  anonymousChanged:Function = () => this.comment.email = ''
  
  constructor (private _pokemonService: PokemonService ) {
  }
  
  ngAfterContentChecked () {
    if (this.pokemon.name) {
      this.comments = this._pokemonService.getComments(this.pokemon.name)     
    }
  }
  
  addComment:Function = () => {
    this.comment.date = Date.now()
    this._pokemonService.saveComment(this.pokemon.name, this.comment)
    this.comments = this._pokemonService.getComments(this.pokemon.name)
    this.comment = {}
  }
}
