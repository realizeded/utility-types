import {Brand} from '../../src/index';

type Prop = {age:string,weight:number};
type NewProp = {age:number,name:string}

type USD = Brand<number, "USD">
type EUR = Brand<number, "EUR">

const tax = 5 as USD;
const usd = 10 as USD;
const eur = 10 as EUR;

function gross(net: USD): USD {
  return (net + tax) as USD;
}

gross(usd); // ok
gross(eur); // Type '"EUR"' is not assignable to type '"USD"'.