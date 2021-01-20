type NonFunctionKeys<T extends object> = {
    [K in keyof T]-?:T[K] extends Function?never:K
}[keyof T];
type MixedPropss = { namse: string; setName: string };

// Expect: "name"
type Keyss = NonFunctionKeys<MixedPropss>;