"use strict";
require('../zone');
var timers_1 = require('../common/timers');
var set = 'set';
var clear = 'clear';
var _global = typeof window === 'undefined' ? global : window;
// Timers
var timers = require('timers');
timers_1.patchTimer(timers, set, clear, 'Timeout');
timers_1.patchTimer(timers, set, clear, 'Interval');
timers_1.patchTimer(timers, set, clear, 'Immediate');
var shouldPatchGlobalTimers = global.setTimeout !== timers.setTimeout;
if (shouldPatchGlobalTimers) {
    timers_1.patchTimer(_global, set, clear, 'Timeout');
    timers_1.patchTimer(_global, set, clear, 'Interval');
    timers_1.patchTimer(_global, set, clear, 'Immediate');
}
// Crypto
var crypto;
try {
    crypto = require('crypto');
}
catch (err) { }
// TODO(gdi2290): implement a better way to patch these methods
if (crypto) {
    var nativeRandomBytes_1 = crypto.randomBytes;
    crypto.randomBytes = function randomBytesZone(size, callback) {
        if (!callback) {
            return nativeRandomBytes_1(size);
        }
        else {
            var zone = Zone.current;
            var source = crypto.constructor.name + '.randomBytes';
            return nativeRandomBytes_1(size, zone.wrap(callback, source));
        }
    }.bind(crypto);
    var nativePbkdf2_1 = crypto.pbkdf2;
    crypto.pbkdf2 = function pbkdf2Zone() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var fn = args[args.length - 1];
        if (typeof fn === 'function') {
            var zone = Zone.current;
            var source = crypto.constructor.name + '.pbkdf2';
            args[args.length - 1] = zone.wrap(fn, source);
            return nativePbkdf2_1.apply(void 0, args);
        }
        else {
            return nativePbkdf2_1.apply(void 0, args);
        }
    }.bind(crypto);
}
//# sourceMappingURL=node.js.map