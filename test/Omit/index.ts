type Omit<T extends object,K extends keyof T> = Pick<T,Diff<keyof T,K>>;
type Diff<T,K extends T> = T extends K?never:T;
let a:Omit<{name:string,age:number},'age'>;