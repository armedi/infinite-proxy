/**
 * Creates an infinite proxy that returns itself for all operations.
 * This proxy behaves like an infinitely nested object/function.
 *
 * @returns An infinite proxy object
 */
export function createInfiniteProxy(): InfiniteProxy;

/**
 * Represents an infinitely nested proxy object/function.
 */
interface InfiniteProxy {
  (...args: any[]): InfiniteProxy;
  new (...args: any[]): InfiniteProxy;
  [key: string]: InfiniteProxy;
  [key: number]: InfiniteProxy;
  [key: symbol]: InfiniteProxy;
}
