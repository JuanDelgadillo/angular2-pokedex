System.register(['angular2/core', '../pipes/imageify.pipe', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, imageify_pipe_1, router_1;
    var PokemonEvolutionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (imageify_pipe_1_1) {
                imageify_pipe_1 = imageify_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PokemonEvolutionComponent = (function () {
                function PokemonEvolutionComponent() {
                    this.pokemon = {};
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PokemonEvolutionComponent.prototype, "pokemon", void 0);
                PokemonEvolutionComponent = __decorate([
                    core_1.Component({
                        selector: 'pokemon-evolution',
                        pipes: [imageify_pipe_1.ImageifyPipe],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<div class=\"text-center\" *ngFor=\"#evolution of pokemon.evolution, #last = last\">\n                  <a [routerLink]=\"['Pokemon', { name: evolution }]\">\n                    <img src=\"{{evolution | imageify}}\" width=\"160\">\n                    <p>\n                      <strong>{{evolution}}</strong>\n                    </p>\n                  </a>\n                  <span *ngIf=\"!last\" class=\"glyphicon glyphicon-arrow-down\"></span>\n                </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PokemonEvolutionComponent);
                return PokemonEvolutionComponent;
            }());
            exports_1("PokemonEvolutionComponent", PokemonEvolutionComponent);
        }
    }
});
//# sourceMappingURL=pokemon-evolution.component.js.map