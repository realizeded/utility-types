type PickByValueExact<T extends object,U> = Pick<T,
{
    //为什么要用数组包裹起来 其实是因为 在extends 语句中 number|undefined|null extends Number 
    [K in keyof T]-?:[U] extends [T[K]]?(
        [T[K]] extends [U]?K:never
    ):never;
}[keyof T]
>
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { req: number }
// type Propss = PickByValueExact<Props, number>;
// Expect: { reqUndef: number | undefined; }
type Propsds = PickByValueExact<Props, number | undefined>;

export default {};