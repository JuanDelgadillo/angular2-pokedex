'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
var core_1 = require('angular2/core');
var invalid_pipe_argument_exception_1 = require('./invalid_pipe_argument_exception');
var ObservableStrategy = (function () {
    function ObservableStrategy() {
    }
    ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async_1.ObservableWrapper.subscribe(async, updateLatestValue, function (e) { throw e; });
    };
    ObservableStrategy.prototype.dispose = function (subscription) { async_1.ObservableWrapper.dispose(subscription); };
    ObservableStrategy.prototype.onDestroy = function (subscription) { async_1.ObservableWrapper.dispose(subscription); };
    return ObservableStrategy;
})();
var PromiseStrategy = (function () {
    function PromiseStrategy() {
    }
    PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.then(updateLatestValue);
    };
    PromiseStrategy.prototype.dispose = function (subscription) { };
    PromiseStrategy.prototype.onDestroy = function (subscription) { };
    return PromiseStrategy;
})();
var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
var __unused; // avoid unused import when Promise union types are erased
/**
 * The `async` pipe subscribes to an Observable or Promise and returns the latest value it has
 * emitted.
 * When a new value is emitted, the `async` pipe marks the component to be checked for changes.
 *
 * ### Example
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example core/pipes/ts/async_pipe/async_pipe_example.ts region='AsyncPipe'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. Every 500ms, the `time` Observable updates the view with the current time.
 *
 * ```typescript
 * ```
 */
var AsyncPipe = (function () {
    function AsyncPipe(_ref) {
        /** @internal */
        this._latestValue = null;
        /** @internal */
        this._latestReturnedValue = null;
        /** @internal */
        this._subscription = null;
        /** @internal */
        this._obj = null;
        this._strategy = null;
        this._ref = _ref;
    }
    AsyncPipe.prototype.ngOnDestroy = function () {
        if (lang_1.isPresent(this._subscription)) {
            this._dispose();
        }
    };
    AsyncPipe.prototype.transform = function (obj, args) {
        if (lang_1.isBlank(this._obj)) {
            if (lang_1.isPresent(obj)) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.transform(obj);
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        else {
            this._latestReturnedValue = this._latestValue;
            return core_1.WrappedValue.wrap(this._latestValue);
        }
    };
    /** @internal */
    AsyncPipe.prototype._subscribe = function (obj) {
        var _this = this;
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription =
            this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
    };
    /** @internal */
    AsyncPipe.prototype._selectStrategy = function (obj) {
        if (lang_1.isPromise(obj)) {
            return _promiseStrategy;
        }
        else if (async_1.ObservableWrapper.isObservable(obj)) {
            return _observableStrategy;
        }
        else {
            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(AsyncPipe, obj);
        }
    };
    /** @internal */
    AsyncPipe.prototype._dispose = function () {
        this._strategy.dispose(this._subscription);
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    /** @internal */
    AsyncPipe.prototype._updateLatestValue = function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    AsyncPipe = __decorate([
        // avoid unused import when Promise union types are erased
        core_1.Pipe({ name: 'async', pure: false }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], AsyncPipe);
    return AsyncPipe;
})();
exports.AsyncPipe = AsyncPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21tb24vcGlwZXMvYXN5bmNfcGlwZS50cyJdLCJuYW1lcyI6WyJPYnNlcnZhYmxlU3RyYXRlZ3kiLCJPYnNlcnZhYmxlU3RyYXRlZ3kuY29uc3RydWN0b3IiLCJPYnNlcnZhYmxlU3RyYXRlZ3kuY3JlYXRlU3Vic2NyaXB0aW9uIiwiT2JzZXJ2YWJsZVN0cmF0ZWd5LmRpc3Bvc2UiLCJPYnNlcnZhYmxlU3RyYXRlZ3kub25EZXN0cm95IiwiUHJvbWlzZVN0cmF0ZWd5IiwiUHJvbWlzZVN0cmF0ZWd5LmNvbnN0cnVjdG9yIiwiUHJvbWlzZVN0cmF0ZWd5LmNyZWF0ZVN1YnNjcmlwdGlvbiIsIlByb21pc2VTdHJhdGVneS5kaXNwb3NlIiwiUHJvbWlzZVN0cmF0ZWd5Lm9uRGVzdHJveSIsIkFzeW5jUGlwZSIsIkFzeW5jUGlwZS5jb25zdHJ1Y3RvciIsIkFzeW5jUGlwZS5uZ09uRGVzdHJveSIsIkFzeW5jUGlwZS50cmFuc2Zvcm0iLCJBc3luY1BpcGUuX3N1YnNjcmliZSIsIkFzeW5jUGlwZS5fc2VsZWN0U3RyYXRlZ3kiLCJBc3luY1BpcGUuX2Rpc3Bvc2UiLCJBc3luY1BpcGUuX3VwZGF0ZUxhdGVzdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBbUQsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RSxzQkFBMEQsMkJBQTJCLENBQUMsQ0FBQTtBQUN0RixxQkFPTyxlQUFlLENBQUMsQ0FBQTtBQUV2QixnREFBMkMsbUNBQW1DLENBQUMsQ0FBQTtBQUUvRTtJQUFBQTtJQVFBQyxDQUFDQTtJQVBDRCwrQ0FBa0JBLEdBQWxCQSxVQUFtQkEsS0FBVUEsRUFBRUEsaUJBQXNCQTtRQUNuREUsTUFBTUEsQ0FBQ0EseUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxpQkFBaUJBLEVBQUVBLFVBQUFBLENBQUNBLElBQU1BLE1BQU1BLENB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LCBDT05TVH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsIE9ic2VydmFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1xuICBQaXBlLFxuICBJbmplY3RhYmxlLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBQaXBlVHJhbnNmb3JtLFxuICBXcmFwcGVkVmFsdWVcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7SW52YWxpZFBpcGVBcmd1bWVudEV4Y2VwdGlvbn0gZnJvbSAnLi9pbnZhbGlkX3BpcGVfYXJndW1lbnRfZXhjZXB0aW9uJztcblxuY2xhc3MgT2JzZXJ2YWJsZVN0cmF0ZWd5IHtcbiAgY3JlYXRlU3Vic2NyaXB0aW9uKGFzeW5jOiBhbnksIHVwZGF0ZUxhdGVzdFZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlV3JhcHBlci5zdWJzY3JpYmUoYXN5bmMsIHVwZGF0ZUxhdGVzdFZhbHVlLCBlID0+IHsgdGhyb3cgZTsgfSk7XG4gIH1cblxuICBkaXNwb3NlKHN1YnNjcmlwdGlvbjogYW55KTogdm9pZCB7IE9ic2VydmFibGVXcmFwcGVyLmRpc3Bvc2Uoc3Vic2NyaXB0aW9uKTsgfVxuXG4gIG9uRGVzdHJveShzdWJzY3JpcHRpb246IGFueSk6IHZvaWQgeyBPYnNlcnZhYmxlV3JhcHBlci5kaXNwb3NlKHN1YnNjcmlwdGlvbik7IH1cbn1cblxuY2xhc3MgUHJvbWlzZVN0cmF0ZWd5IHtcbiAgY3JlYXRlU3Vic2NyaXB0aW9uKGFzeW5jOiBhbnksIHVwZGF0ZUxhdGVzdFZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBhc3luYy50aGVuKHVwZGF0ZUxhdGVzdFZhbHVlKTtcbiAgfVxuXG4gIGRpc3Bvc2Uoc3Vic2NyaXB0aW9uOiBhbnkpOiB2b2lkIHt9XG5cbiAgb25EZXN0cm95KHN1YnNjcmlwdGlvbjogYW55KTogdm9pZCB7fVxufVxuXG52YXIgX3Byb21pc2VTdHJhdGVneSA9IG5ldyBQcm9taXNlU3RyYXRlZ3koKTtcbnZhciBfb2JzZXJ2YWJsZVN0cmF0ZWd5ID0gbmV3IE9ic2VydmFibGVTdHJhdGVneSgpO1xudmFyIF9fdW51c2VkOiBQcm9taXNlPGFueT47ICAvLyBhdm9pZCB1bnVzZWQgaW1wb3J0IHdoZW4gUHJvbWlzZSB1bmlvbiB0eXBlcyBhcmUgZXJhc2VkXG5cbi8qKlxuICogVGhlIGBhc3luY2AgcGlwZSBzdWJzY3JpYmVzIHRvIGFuIE9ic2VydmFibGUgb3IgUHJvbWlzZSBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlIGl0IGhhc1xuICogZW1pdHRlZC5cbiAqIFdoZW4gYSBuZXcgdmFsdWUgaXMgZW1pdHRlZCwgdGhlIGBhc3luY2AgcGlwZSBtYXJrcyB0aGUgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgZm9yIGNoYW5nZXMuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGlzIGV4YW1wbGUgYmluZHMgYSBgUHJvbWlzZWAgdG8gdGhlIHZpZXcuIENsaWNraW5nIHRoZSBgUmVzb2x2ZWAgYnV0dG9uIHJlc29sdmVzIHRoZVxuICogcHJvbWlzZS5cbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9waXBlcy90cy9hc3luY19waXBlL2FzeW5jX3BpcGVfZXhhbXBsZS50cyByZWdpb249J0FzeW5jUGlwZSd9XG4gKlxuICogSXQncyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBgYXN5bmNgIHdpdGggT2JzZXJ2YWJsZXMuIFRoZSBleGFtcGxlIGJlbG93IGJpbmRzIHRoZSBgdGltZWAgT2JzZXJ2YWJsZVxuICogdG8gdGhlIHZpZXcuIEV2ZXJ5IDUwMG1zLCB0aGUgYHRpbWVgIE9ic2VydmFibGUgdXBkYXRlcyB0aGUgdmlldyB3aXRoIHRoZSBjdXJyZW50IHRpbWUuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogYGBgXG4gKi9cbkBQaXBlKHtuYW1lOiAnYXN5bmMnLCBwdXJlOiBmYWxzZX0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXN5bmNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbGF0ZXN0VmFsdWU6IE9iamVjdCA9IG51bGw7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2xhdGVzdFJldHVybmVkVmFsdWU6IE9iamVjdCA9IG51bGw7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3Vic2NyaXB0aW9uOiBPYmplY3QgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIF9vYmo6IE9ic2VydmFibGU8YW55PnwgUHJvbWlzZTxhbnk+fCBFdmVudEVtaXR0ZXI8YW55PiA9IG51bGw7XG4gIHByaXZhdGUgX3N0cmF0ZWd5OiBhbnkgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgY29uc3RydWN0b3IoX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgdGhpcy5fcmVmID0gX3JlZjsgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fc3Vic2NyaXB0aW9uKSkge1xuICAgICAgdGhpcy5fZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybShvYmo6IE9ic2VydmFibGU8YW55PnwgUHJvbWlzZTxhbnk+fCBFdmVudEVtaXR0ZXI8YW55PiwgYXJncz86IGFueVtdKTogYW55IHtcbiAgICBpZiAoaXNCbGFuayh0aGlzLl9vYmopKSB7XG4gICAgICBpZiAoaXNQcmVzZW50KG9iaikpIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlKG9iaik7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlID0gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG9iaiAhPT0gdGhpcy5fb2JqKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0ob2JqKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGF0ZXN0VmFsdWUgPT09IHRoaXMuX2xhdGVzdFJldHVybmVkVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlID0gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgICByZXR1cm4gV3JhcHBlZFZhbHVlLndyYXAodGhpcy5fbGF0ZXN0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3N1YnNjcmliZShvYmo6IE9ic2VydmFibGU8YW55PnwgUHJvbWlzZTxhbnk+fCBFdmVudEVtaXR0ZXI8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuX29iaiA9IG9iajtcbiAgICB0aGlzLl9zdHJhdGVneSA9IHRoaXMuX3NlbGVjdFN0cmF0ZWd5KG9iaik7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID1cbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kuY3JlYXRlU3Vic2NyaXB0aW9uKG9iaiwgdmFsdWUgPT4gdGhpcy5fdXBkYXRlTGF0ZXN0VmFsdWUob2JqLCB2YWx1ZSkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0U3RyYXRlZ3kob2JqOiBPYnNlcnZhYmxlPGFueT58IFByb21pc2U8YW55PnwgRXZlbnRFbWl0dGVyPGFueT4pOiBhbnkge1xuICAgIGlmIChpc1Byb21pc2Uob2JqKSkge1xuICAgICAgcmV0dXJuIF9wcm9taXNlU3RyYXRlZ3k7XG4gICAgfSBlbHNlIGlmIChPYnNlcnZhYmxlV3JhcHBlci5pc09ic2VydmFibGUob2JqKSkge1xuICAgICAgcmV0dXJuIF9vYnNlcnZhYmxlU3RyYXRlZ3k7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGlwZUFyZ3VtZW50RXhjZXB0aW9uKEFzeW5jUGlwZSwgb2JqKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9kaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0cmF0ZWd5LmRpc3Bvc2UodGhpcy5fc3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLl9sYXRlc3RWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9vYmogPSBudWxsO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdXBkYXRlTGF0ZXN0VmFsdWUoYXN5bmM6IGFueSwgdmFsdWU6IE9iamVjdCkge1xuICAgIGlmIChhc3luYyA9PT0gdGhpcy5fb2JqKSB7XG4gICAgICB0aGlzLl9sYXRlc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19