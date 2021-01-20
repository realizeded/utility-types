type SetDifference<T,U> = T extends U?never:T;
type Diff<T extends object,U extends object> = Pick<T,SetDifference<keyof T,keyof U>>;
type a = {
    a:1,
    b:2
};
type b = {
    a:1
}




