type $keys<T extends object> =
{
  [K in keyof T]:K
}[keyof T];
type Propss = { name: string; age: number; visible: boolean };

// Expect: "name" | "age" | "visible"
type PropsKeys = $keys<Propss>;