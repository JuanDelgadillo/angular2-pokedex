import {Component, Input, AfterContentChecked} from 'angular2/core'
import { PokemonService } from '../services/pokemon.service'

@Component({
	selector: 'comments',
  providers: [PokemonService],
	template: `
			<!-- comments -->
        <button class="btn btn-primary" *ngIf="!show" (click)="toggle()">Show comments <span class="badge">{{comments.length}}</span></button>
        <div class="panel panel-primary" *ngIf="show">
          <div class="panel-heading">
            <h1 class="panel-title">Comments <button class="close pull-right" (click)="toggle()">&times;</button></h1>
          </div>
          <div class="panel-body">
            <form name="commentsForm" #f="ngForm" (ngSubmit)="addComment()" class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-sm-6">
                  <textarea ngControl="body" #body="ngForm" [(ngModel)]="comment.body" placeholder="Please tell us what do you think about {{ pokemon.name}}" class="form-control" required></textarea>
                </div>
                <div class="col-sm-4">
                  <input ngControl="email" [(ngModel)]="comment.email" [attr.required]="!comment.anonymous" [disabled]="comment.anonymous" type="email" placeholder="Please enter your email address" class="form-control">
                  <label>
                    <input ngControl="anonymous" [(ngModel)]="comment.anonymous" (change)="anonymousChanged()" id="anonymous" type="checkbox">
                    Anonymous
                  </label>
                </div>
                <div class="col-sm-2">
                  <button type="submit" class="btn btn-lg">Comment</button>
                </div>
              </div>
            </form>
            <blockquote *ngFor="#comment of comments">
                <p>{{ comment.body }}</p>
                <footer>
                  Comment by 
                  <a *ngIf="!comment.anonymous" href="mailto:{{comment.email}}">{{comment.email}}</a>
                  <em *ngIf="comment.anonymous">Anonymous</em>
                   on <span>{{comment.date | date: 'medium'}}</span>
                  
                </footer>
              </blockquote>
          </div>
        </div>
        <!-- /comments -->
	`
})

export class CommentsComponent implements AfterContentChecked {
  comment = {}
  @Input() pokemon:Object = {}
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
