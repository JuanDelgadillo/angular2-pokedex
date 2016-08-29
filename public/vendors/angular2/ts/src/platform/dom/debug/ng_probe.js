"use strict";
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var debug_node_1 = require('angular2/src/core/debug/debug_node');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var core_1 = require('angular2/core');
var debug_renderer_1 = require('angular2/src/core/debug/debug_renderer');
var INSPECT_GLOBAL_NAME = 'ng.probe';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
function inspectNativeElement(element) {
    return debug_node_1.getDebugNode(element);
}
exports.inspectNativeElement = inspectNativeElement;
function _createConditionalRootRenderer(rootRenderer) {
    if (lang_1.assertionsEnabled()) {
        return _createRootRenderer(rootRenderer);
    }
    return rootRenderer;
}
function _createRootRenderer(rootRenderer) {
    dom_adapter_1.DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    return new debug_renderer_1.DebugDomRootRenderer(rootRenderer);
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
exports.ELEMENT_PROBE_PROVIDERS = lang_1.CONST_EXPR([
    new di_1.Provider(core_1.RootRenderer, { useFactory: _createConditionalRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })
]);
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = lang_1.CONST_EXPR([new di_1.Provider(core_1.RootRenderer, { useFactory: _createRootRenderer, deps: [dom_renderer_1.DomRootRenderer] })]);
//# sourceMappingURL=ng_probe.js.map