import React from 'react';

// 1. we can pass only stricted strings
// 2. Exclude - remove from type

type templateLiteralType = {
    position: Exclude<'left' | 'center' | 'right' | 'top', 'top'>
}

const TemplateLiterals = () => {
    return <Child position={'center'} />;
}

const Child = ({ position }: templateLiteralType) => {
    return <div>{position}</div>;
}

export default TemplateLiterals;

// 3. Record - create new type from 2 types (key,val)
interface CatInfo {
    age: number;
    color: string;
}

type CatName = "mitzi" | "gandalf" | "hit";

const cats: Record<CatName, CatInfo> = {
    mitzi: { age: 10, color: "black" },
    gandalf: { age: 5, color: "grey" },
    hit: { age: 16, color: "black & white" },
};
console.log(cats.gandalf)

//4. keyof - return literal type union
type Point = { x: number; y: number };
type P = keyof Point; //  "x" | "y"

//5. typeof - return as interface on an object
const bmw = { name: "BMW", power: "1000hp" }
type CarType = typeof bmw; // { name: string, power: string }

//6. keyof typeof
type CarKeys = keyof typeof bmw; // "name" | "power"
