type $Call<T extends (...args:any[])=>any> = 
T extends (...args:any[])=>infer P?P:never;

type func = ()=>number;
let obj:$Call<func>;
