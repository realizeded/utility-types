type NonUndefined<T> = T extends undefined?never:T;
type FunctionKeys<T extends object> = {
    [K in keyof T]-?:NonUndefined<T[K]> extends Function?T[K]:never;
}[keyof T];



type MixedProps = { name: string; setName: (name: string) => void };

// Expect: "setName"
type Keys = FunctionKeys<MixedProps>;