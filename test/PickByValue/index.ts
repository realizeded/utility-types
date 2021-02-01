type PickByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]
>;
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { req: number }
type Propsa = PickByValue<Props, number>;
// Expect: { req: number; reqUndef: number | undefined; }
type Propsb = PickByValue<Props, number | undefined>;
export default {};