

type $Diffs<T extends object,U extends object,I = 
Pick<T,DiffKey<keyof T,keyof U>>&Pick<U,DiffKey<keyof U,keyof T>>>
 = {
     [K in keyof I]:I[K]
 } 
 type DiffKey<T,U> = T extends U?never:T;

 type Props = { name: string; age: number; visible: boolean };
 type DefaultProps = { age: number };
 
 // Expect: { name: string; visible: boolean; }
 type RequiredProps = $Diffs<Props, DefaultProps>;
