System.register(['angular2/core', '../services/pokemon.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pokemon_service_1;
    var CommentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            }],
        execute: function() {
            CommentsComponent = (function () {
                function CommentsComponent(_pokemonService) {
                    var _this = this;
                    this._pokemonService = _pokemonService;
                    this.comment = {};
                    this.pokemon = {};
                    this.comments = [];
                    this.show = false;
                    this.toggle = function () { return _this.show = !_this.show; };
                    this.anonymousChanged = function () { return _this.comment.email = ''; };
                    this.addComment = function () {
                        _this.comment.date = Date.now();
                        _this._pokemonService.saveComment(_this.pokemon.name, _this.comment);
                        _this.comments = _this._pokemonService.getComments(_this.pokemon.name);
                        _this.comment = {};
                    };
                }
                CommentsComponent.prototype.ngAfterContentChecked = function () {
                    if (this.pokemon.name) {
                        this.comments = this._pokemonService.getComments(this.pokemon.name);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CommentsComponent.prototype, "pokemon", void 0);
                CommentsComponent = __decorate([
                    core_1.Component({
                        selector: 'comments',
                        providers: [pokemon_service_1.PokemonService],
                        template: "\n\t\t\t<!-- comments -->\n        <button class=\"btn btn-primary\" *ngIf=\"!show\" (click)=\"toggle()\">Show comments <span class=\"badge\">{{comments.length}}</span></button>\n        <div class=\"panel panel-primary\" *ngIf=\"show\">\n          <div class=\"panel-heading\">\n            <h1 class=\"panel-title\">Comments <button class=\"close pull-right\" (click)=\"toggle()\">&times;</button></h1>\n          </div>\n          <div class=\"panel-body\">\n            <form name=\"commentsForm\" #f=\"ngForm\" (ngSubmit)=\"addComment()\" class=\"form-horizontal\" role=\"form\">\n              <div class=\"form-group\">\n                <div class=\"col-sm-6\">\n                  <textarea ngControl=\"body\" #body=\"ngForm\" [(ngModel)]=\"comment.body\" placeholder=\"Please tell us what do you think about {{ pokemon.name}}\" class=\"form-control\" required></textarea>\n                </div>\n                <div class=\"col-sm-4\">\n                  <input ngControl=\"email\" [(ngModel)]=\"comment.email\" [attr.required]=\"!comment.anonymous\" [disabled]=\"comment.anonymous\" type=\"email\" placeholder=\"Please enter your email address\" class=\"form-control\">\n                  <label>\n                    <input ngControl=\"anonymous\" [(ngModel)]=\"comment.anonymous\" (change)=\"anonymousChanged()\" id=\"anonymous\" type=\"checkbox\">\n                    Anonymous\n                  </label>\n                </div>\n                <div class=\"col-sm-2\">\n                  <button type=\"submit\" class=\"btn btn-lg\">Comment</button>\n                </div>\n              </div>\n            </form>\n            <blockquote *ngFor=\"#comment of comments\">\n                <p>{{ comment.body }}</p>\n                <footer>\n                  Comment by \n                  <a *ngIf=\"!comment.anonymous\" href=\"mailto:{{comment.email}}\">{{comment.email}}</a>\n                  <em *ngIf=\"comment.anonymous\">Anonymous</em>\n                   on <span>{{comment.date | date: 'medium'}}</span>\n                  \n                </footer>\n              </blockquote>\n          </div>\n        </div>\n        <!-- /comments -->\n\t"
                    }), 
                    __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
                ], CommentsComponent);
                return CommentsComponent;
            }());
            exports_1("CommentsComponent", CommentsComponent);
        }
    }
});
//# sourceMappingURL=comments.component.js.map