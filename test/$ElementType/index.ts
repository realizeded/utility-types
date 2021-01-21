type $ElementType<T,K extends keyof T=keyof T> = {
    [K in keyof T]:T[K]
}[K];
type Propss = { name: string; age: number; visible: boolean };
// Expect: string
type NameType = $ElementType<Propss, 'name'>; 
type Tuple = [boolean, number];
// Expect: boolean
type A = $ElementType<Tuple, 0>;
// Expect: number
type B = $ElementType<Tuple, 1>;

type Arr = boolean[];
// Expect: boolean
type ItemsType = $ElementType<Arr, number>;

type Obj = { [key: string]: number };
// Expect: number
type ValuesType = $ElementType<Obj, string>;