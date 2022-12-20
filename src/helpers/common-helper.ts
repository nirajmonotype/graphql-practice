/**
 * Handle data and error from the promise
 * @param promise
 */
export function handle(promise: Promise<any>) {
    return promise.then((data) => [undefined, data]).catch((error) => Promise.resolve([error, undefined]));
}
