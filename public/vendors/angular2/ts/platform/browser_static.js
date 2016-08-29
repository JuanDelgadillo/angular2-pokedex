"use strict";
var lang_1 = require('angular2/src/facade/lang');
var browser_common_1 = require('angular2/src/platform/browser_common');
var core_1 = require('angular2/core');
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
exports.BROWSER_APP_PROVIDERS = browser_common_1.BROWSER_APP_COMMON_PROVIDERS;
/**
 * See {@link bootstrap} for more information.
 */
function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (lang_1.isPresent(initReflector)) {
        initReflector();
    }
    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
    return core_1.platform(browser_common_1.BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
}
exports.bootstrapStatic = bootstrapStatic;
//# sourceMappingURL=browser_static.js.map