import {DeepNonNullable} from '../../src/index';
type IDeepNonNullable<T> = T extends Function?T

type Human = {
    a?:{
        b?:{
            c?:{}
        }
    }
};
type deepNoNullableHuman = IDeepNonNullable<Human>;
let obj:deepNoNullableHuman = {
    a:{
        b:{
            c:{}
        }
    }
}