"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var collection_1 = require('angular2/src/facade/collection');
var exceptions_1 = require('angular2/src/facade/exceptions');
var lang_1 = require('angular2/src/facade/lang');
/**
 * Represents a container where one or more Views can be attached.
 *
 * The container can contain two kinds of Views. Host Views, created by instantiating a
 * {@link Component} via {@link #createHostView}, and Embedded Views, created by instantiating an
 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
 *
 * The location of the View Container within the containing View is specified by the Anchor
 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
 * have a single View Container.
 *
 * Root elements of Views attached to this container become siblings of the Anchor Element in
 * the Rendered View.
 *
 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
 * with `ViewContainerRef` on the Element, or you obtain it via
 * {@link AppViewManager#getViewContainer}.
 *
 * <!-- TODO(i): we are also considering ElementRef#viewContainer api -->
 */
var ViewContainerRef = (function () {
    function ViewContainerRef() {
    }
    Object.defineProperty(ViewContainerRef.prototype, "element", {
        /**
         * Anchor element that specifies the location of this container in the containing View.
         * <!-- TODO: rename to anchorElement -->
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroys all Views in this container.
     */
    ViewContainerRef.prototype.clear = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    };
    Object.defineProperty(ViewContainerRef.prototype, "length", {
        /**
         * Returns the number of Views currently attached to this container.
         */
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return ViewContainerRef;
}());
exports.ViewContainerRef = ViewContainerRef;
var ViewContainerRef_ = (function (_super) {
    __extends(ViewContainerRef_, _super);
    function ViewContainerRef_(_element) {
        _super.call(this);
        this._element = _element;
    }
    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
        get: function () {
            var views = this._element.nestedViews;
            return lang_1.isPresent(views) ? views.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
        get: function () { return this._element.ref; },
        enumerable: true,
        configurable: true
    });
    // TODO(rado): profile and decide whether bounds checks should be added
    // to the methods below.
    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createEmbeddedViewInContainer(this._element.ref, index, templateRef);
    };
    ViewContainerRef_.prototype.createHostView = function (hostViewFactoryRef, index, dynamicallyCreatedProviders, projectableNodes) {
        if (index === void 0) { index = -1; }
        if (dynamicallyCreatedProviders === void 0) { dynamicallyCreatedProviders = null; }
        if (projectableNodes === void 0) { projectableNodes = null; }
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.createHostViewInContainer(this._element.ref, index, hostViewFactoryRef, dynamicallyCreatedProviders, projectableNodes);
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.insert = function (viewRef, index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length;
        var vm = this._element.parentView.viewManager;
        return vm.attachViewInContainer(this._element.ref, index, viewRef);
    };
    ViewContainerRef_.prototype.indexOf = function (viewRef) {
        return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    };
    // TODO(i): rename to destroy
    ViewContainerRef_.prototype.remove = function (index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.destroyViewInContainer(this._element.ref, index);
        // view is intentionally not returned to the client.
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.detach = function (index) {
        if (index === void 0) { index = -1; }
        if (index == -1)
            index = this.length - 1;
        var vm = this._element.parentView.viewManager;
        return vm.detachViewInContainer(this._element.ref, index);
    };
    return ViewContainerRef_;
}(ViewContainerRef));
exports.ViewContainerRef_ = ViewContainerRef_;
//# sourceMappingURL=view_container_ref.js.map