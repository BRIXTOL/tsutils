/* eslint-disable no-unused-vars */

type Writable<T, O> = (
  T extends O
  ? T
  : {
    [P in keyof T as IfEquals<{ [Q in P]: T[P]},
    { -readonly [Q in P]: T[P] }, P>]: T[P]
  }
)

type IfEquals<X, Y, A = X, B = never> = (
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B
);

type Cleanup<T> = (
  0 extends (1 & T)
  ? unknown
  : T extends readonly any[]
  ? (
    Exclude<keyof T, keyof any[]> extends never
    ? { [k: `${number}`]: T[number] }
    : Omit<T, keyof any[]>
  )
  : T
)

type PrefixKeys<V, K extends PropertyKey, O> = (
  V extends O
  ? { [P in K]: V }
  : V extends object
  ? { [P in keyof V as `${Extract<K, string | number>}.${Extract<P, string | number>}`]: V[P] } : { [P in K]: V }
);

type ValueOf<T> = T[keyof T]

type Flatten<T, O = never> = (
  Writable<Cleanup<T>, O> extends infer U
  ? U extends O
  ? U
  : U extends object
  ? ValueOf<{ [K in keyof U]-?: (x: PrefixKeys<Flatten<U[K], O>, K, O>) => void }>
    | ((x: U) => void) extends (x: infer I) => void
    ? { [K in keyof I]: I[K] }
    : never
  : U
  : never
);

/**
 * Keyof Dot
 *
 * Deeply references object keys to generate a string literal
 * flattened union that separates each nest property with
 * a `.` dot character.
 *
 * @example
 *
 * type keyofdot = KeyofDot<{
 *  a: string;
 *  b: {
 *    c: string;
 *    d: {
 *    e: {
 *     g: string;
 *     j: string;
 *  }[];
 * }>
 *
 * // RESULT
 * | "a"
 * | "b"
 * | "b.c"
 * | "b.d.e"
 * | "b.d"
 * | `b.d.e.${number}.g`
 * | `b.d.e.${number}.j`
 * | `b.d.e.${number}`
 */
export type KeyofDot<T> = keyof Flatten<T>
