"use strict";
var lang_1 = require('angular2/src/facade/lang');
exports.DOM = null;
function setRootDomAdapter(adapter) {
    if (lang_1.isBlank(exports.DOM)) {
        exports.DOM = adapter;
    }
}
exports.setRootDomAdapter = setRootDomAdapter;
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 */
var DomAdapter = (function () {
    function DomAdapter() {
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: function () { return this._attrToPropMap; },
        set: function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return DomAdapter;
}());
exports.DomAdapter = DomAdapter;
//# sourceMappingURL=dom_adapter.js.map