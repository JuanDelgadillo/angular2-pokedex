import { Component, Input, AfterContentChecked } from '@angular/core';

import { PokemonService } from 'app/common';

@Component({
  selector: 'pokemon-comments',
  templateUrl: './pokemon-comments.component.html',
  providers: [PokemonService]
})
export class PokemonCommentsComponent implements AfterContentChecked {

  @Input() pokemon:any = {};

  comment: any = {};
  comments = [];
  show: boolean = false;
  toggle: Function = () => this.show = !this.show;
  anonymousChanged: Function = () => this.comment.email = '';

  constructor(private _pokemonService: PokemonService) { }

  ngAfterContentChecked () {
    if (this.pokemon.name) {
      this.comments = this._pokemonService.getComments(this.pokemon.name)
    }
  }

  addComment = () => {
    this.comment.date = Date.now()
    this._pokemonService.saveComment(this.pokemon.name, this.comment)
    this.comments = this._pokemonService.getComments(this.pokemon.name)
    this.comment = {}
  }

}
