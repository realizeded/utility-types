type PromiseType<T extends Promise<any>> = T extends Promise<infer R>?R:never;

// Expect: string
type Response = PromiseType<Promise<string>>;
export default {};