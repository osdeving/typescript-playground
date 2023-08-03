// primitive types - string, number, bigint, boolean, undefined, symbol and null
// arrays - Array<type> ou type[] (p.ex.: string[], Array<number>, number[])

// o tipo any

let obj: any = { x : 0}

// a seguir, nenhum erro ocorrerá em tempo de compilação
obj.foo()
obj()
obj.bar = 100
obj = "hello"
const n : number = obj

// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// use noImplicitAny true para não deixar isso acontecer

// ---------------


let myName: string = "Alice" 
let myName2 = "Bob" // typescript tenta inferir o tipo, então nem sempre é necessário anotar o tipo

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!")
}

// greet(42) // Argument of type 'number' is not assignable to parameter of type 'string'.

function getFavoriteNumber() : number {
    return 42
}

const names = ['alice', 'bob', 'eve']









