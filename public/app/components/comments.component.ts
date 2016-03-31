import {Component, Input} from 'angular2/core'

@Component({
	selector: 'comments',
	template: `
			<!-- comments -->
        <button class="btn btn-primary" *ngIf="!show" (click)="toggle()">Show comments <span class="badge">{{comments.length}}</span></button>
        <div class="panel panel-primary" *ngIf="show">
          <div class="panel-heading">
            <h1 class="panel-title">Comments <button class="close pull-right" (click)="toggle()">&times;</button></h1>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" (ngSubmit)="addComment()" role="form">
              <div class="form-group">
                <div class="col-sm-6">
                  <textarea [(ngModel)]="comment.body" placeholder="Please tell us what do you think about {{ pokemon.name}}" class="form-control"></textarea>
                </div>
                <div class="col-sm-4">
                  <input [(ngModel)]="comment.email" [disabled]="comment.anonymous" type="email" placeholder="Please enter your email address" class="form-control">
                  <label>
                    <input [(ngModel)]="comment.anonymous" (change)="anonymousChanged()" id="anonymous" type="checkbox">
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

export class CommentsComponent {
  comment = {}
  @Input() pokemon:Object = {}
	comments = []
	show:boolean = false
	toggle:Function = () => this.show = !this.show
  anonymousChanged:Function = () => this.comment.email = ''
  
  addComment:Function = () => {
    this.comment.date = Date.now()
    this.comments.push(this.comment)
    this.comment = {}
  }
}
