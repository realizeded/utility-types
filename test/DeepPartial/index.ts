//1.function 返回原类型
//2.Array 
//3.object
//4.基础数据类型
interface deepPartialArray<T> extends Array<IDeepPartial<T>> {};
type deepPartialObject<T extends object> = {
    [K in keyof T]?:IDeepPartial<T[K]>
};
type IDeepPartial<T> = T extends Function?T:
T extends Array<infer U>?
deepPartialArray<U>:T extends object?
deepPartialObject<T>:
T|undefined;

type NestedProps = {
    first: {
      second: {
        name: string;
      };
    };
  };


