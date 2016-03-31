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
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-sm-6">
                  <textarea [(ngModel)]="comment.body" placeholder="Please tell us what do you think about {{ pokemon.name}}" class="form-control"></textarea>
                </div>
                <div class="col-sm-4">
                  <input [(ngModel)]="comment.email" type="email" placeholder="Please enter your email address" class="form-control">
                  <label>
                    <input [(ngModel)]="comment.anonymous" id="anonymous" type="checkbox">
                    Anonymous
                  </label>
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-lg">Comment</button>
                </div>
              </div>
            </form>
            <blockquote>
                <p>OMG Bulbasaur is AMAZING!!!</p>
                <footer>
                  Comment by <a href="mailto:{{comment.email}}">{{comment.email}}</a> on <span>{{comment.date}}</span>
                </footer>
              </blockquote>
              <blockquote>
                <p>Nah, I hate it -_-</p>
                <footer>
                  Comment by <em>Anonymous</em> on <span>Sep 12, 2014, 11:00:00 PM</span>
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
	comments:Object = []
	show:boolean = false
	toggle:Function = () => this.show = !this.show
}
