type Subtract<T extends P,P extends Object> = Pick<T,SetComplement<keyof T,keyof P>>;
type SetComplement<T,K extends T> = T extends K?never:T;
type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { name: string; visible: boolean; }
type RequiredProps = Subtract<Props, DefaultProps>;
export default {};