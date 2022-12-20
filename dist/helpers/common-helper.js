"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
/**
 * Handle data and error from the promise
 * @param promise
 */
function handle(promise) {
    return promise.then((data) => [undefined, data]).catch((error) => Promise.resolve([error, undefined]));
}
exports.handle = handle;
//# sourceMappingURL=common-helper.js.map