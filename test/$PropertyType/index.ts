type $PropertyType<T extends object,K extends keyof T> =T[K];
type Props = { name: string; age: number; visible: boolean };
// Expect: string
type NameType = $PropertyType<Props, 'name'>;

type Tuple = [boolean, number];
// Expect: boolean
type A = $PropertyType<Tuple, '0'>;
// Expect: number
type B = $PropertyType<Tuple, '1'>;
export default {};