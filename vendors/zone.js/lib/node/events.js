"use strict";
var utils_1 = require('../common/utils');
// For EventEmitter
var EE_ADD_LISTENER = 'addListener';
var EE_PREPEND_LISTENER = 'prependListener';
var EE_REMOVE_LISTENER = 'removeListener';
var EE_LISTENERS = 'listeners';
var EE_ON = 'on';
var zoneAwareAddListener = utils_1.makeZoneAwareAddListener(EE_ADD_LISTENER, EE_REMOVE_LISTENER, false, true);
var zoneAwarePrependListener = utils_1.makeZoneAwareAddListener(EE_PREPEND_LISTENER, EE_REMOVE_LISTENER, false, true);
var zoneAwareRemoveListener = utils_1.makeZoneAwareRemoveListener(EE_REMOVE_LISTENER, false);
var zoneAwareListeners = utils_1.makeZoneAwareListeners(EE_LISTENERS);
function patchEventEmitterMethods(obj) {
    if (obj && obj.addListener) {
        utils_1.patchMethod(obj, EE_ADD_LISTENER, function () { return zoneAwareAddListener; });
        utils_1.patchMethod(obj, EE_PREPEND_LISTENER, function () { return zoneAwarePrependListener; });
        utils_1.patchMethod(obj, EE_REMOVE_LISTENER, function () { return zoneAwareRemoveListener; });
        utils_1.patchMethod(obj, EE_LISTENERS, function () { return zoneAwareListeners; });
        obj[EE_ON] = obj[EE_ADD_LISTENER];
        return true;
    }
    else {
        return false;
    }
}
exports.patchEventEmitterMethods = patchEventEmitterMethods;
// EventEmitter
var events;
try {
    events = require('events');
}
catch (err) { }
if (events && events.EventEmitter) {
    patchEventEmitterMethods(events.EventEmitter.prototype);
}
//# sourceMappingURL=events.js.map