import React from 'react'

/*
  Intro to Type Script
*/ 

// let name: string;
// let age: number | string; // union
// let isStudent: boolean;
// let hobbies: string[];

// let role: [number, string]; // tuple

// // function
// type printName = (name: string) => void;

// let displayName:printName = (name) => {
//   console.log(name)
// }

// displayName("devanshu")
// // function

// // object
// type Person = {
//   name: string;
//   age?: number; // optional property
// }

// let person: Person = {
//   name: "devanshu",
//   age: 32
// }

// let lotsOfPeople: Person[];

// // any vs unknown prefer unknown

// let obj: any;

// let obj1: unknown; // prefered

// // void vs never

// type showName = (name: string) => void; // void return undefined in function call

// type showAge = (age: number) => never; // return nothing

// type vs interface
// type Car = {
//   name: string;
//   model?: string; // optional property
// }

// interface Car{
//   name: string;
//   model?: string;
// }

// inheritance in types 
// type X = {
//   a:string;
//   b: number;
// }

// type Y = X & {
//   c: string;
//   d: number;
// }

// let y:Y = {
//   c: "abc",
//   d: 2,
//   a: "cnv",
//   b: 4
// }

// inheritance in interfaces

// interface Person{
//   name: string;
//   age?: number;
// }

// interface Guy extends Person{
//   profession: string;
// }

// let x:Guy = {
//   profession: "developer",
//   name: "dev",
// }

// inheritance in interface with type vice versa
// interface Person{
//   name:string;
//   age?: number;
// }

// type X = Person & {
//   a: string;
//   b: string;

// }

// let c:X = {
//   a: "ghah",
//   name: "dev",
//   b: "hfgf"
// }

// type X = {
//   a: string;
//   b: string;
// }

// interface Person extends X{
//   name:string;
//   age?: number;
// }

// let y:Person = {
//   name: "dev",
//   a: "a",
//   b: "b"
// }


export const BasicsTypescript = () => {
  return (
    <div>BasicsTypescript</div>
  )
}
