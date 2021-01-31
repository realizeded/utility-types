type Unionize<T extends object> = {
    [K in keyof T]:{[P in K]:T[K]}
}[keyof T];

type Props = { name: string; age: number; visible: boolean };

// Expect: { name: string; } | { age: number; } | { visible: boolean; }
type UnionizedType = Unionize<Props>;
export default {}; 