import {Assign} from '../../src/index';
type Prop = {age:string,weight:number};
type NewProp = {age:number,name:string}
/**
 *  age: number;
    weight: number;
    name: string;
 */
type Human = Assign<Prop,NewProp>;

//实现 
type Compute<T> = {
    [K in keyof T]:T[K]
};
// type IAssign<T,U> = Compute<U&Omit<T,Extract<keyof U,keyof T>>>
type IAssign<T extends object,U extends object,I=IDiff<U,T>&Intersection<U,T>&IDiff<T,U>> = Pick<I,keyof I>;
type IDiff<T extends object,U extends object> = {
    [K in Diff<keyof T,keyof U>]:T[K]
}
type Intersection<T,U,I=Omit<T,Diff<keyof T,keyof U>>> = I;
type Diff<T,U> = T extends U?never:T; 
type IHuman = IAssign<Prop,NewProp>;
