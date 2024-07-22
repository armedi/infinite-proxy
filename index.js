/**
 * Creates an infinite proxy that returns itself for all operations.
 * This proxy behaves like an infinitely nested object/function.
 *
 * @returns {Proxy} An infinite proxy object
 */
function createInfiniteProxy() {
  const infiniteProxy = new Proxy(function () {}, {
    get: (target, prop) => {
      if (prop === Symbol.toPrimitive) {
        return () => "";
      }
      if (prop === Symbol.iterator) {
        return function* () {
          yield infiniteProxy;
        };
      }
      return infiniteProxy;
    },
    set: () => true,
    has: () => true,
    deleteProperty: () => true,
    apply: () => infiniteProxy,
    construct: () => infiniteProxy,
    defineProperty: () => true,
    getOwnPropertyDescriptor: () => ({
      configurable: true,
      enumerable: true,
      value: infiniteProxy,
      writable: true,
    }),
    getPrototypeOf: () => null,
    isExtensible: () => true,
    ownKeys: () => [],
    preventExtensions: () => true,
    setPrototypeOf: () => true,
  });

  return infiniteProxy;
}

export default createInfiniteProxy;
