type RequiredKeys<T extends object> = {
    [K in keyof T]-?:{} extends Pick<T,K>?never:K
}[keyof T];
type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

// Expect: "req" | "reqUndef"
type Keys = RequiredKeys<Props>;
export default {};