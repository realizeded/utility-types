type DeepReadonlyObject<T extends object> = {
    readonly [k in keyof T]:T[k]
}
type DeepReadonly<T> = T extends Function?T:
T extends Array<infer U>?ReadonlyArray<DeepReadonly<U>>:
T extends object?DeepReadonlyObject<T>:T;
let config:DeepReadonly<{
    age:{
        a:'1'
    }
}> = {
    age:{
        a:'1'
    }
};
