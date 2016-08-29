"use strict";
var browser_1 = require('angular2/platform/browser');
var debugElement;
var MyDirective = (function () {
    function MyDirective() {
    }
    return MyDirective;
}());
// #docregion by_all
debugElement.query(browser_1.By.all());
// #enddocregion
// #docregion by_css
debugElement.query(browser_1.By.css('[attribute]'));
// #enddocregion
// #docregion by_directive
debugElement.query(browser_1.By.directive(MyDirective));
// #enddocregion
//# sourceMappingURL=by.js.map