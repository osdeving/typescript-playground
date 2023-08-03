// primitive types - string, number, bigint, boolean, undefined, symbol and null
// arrays - Array<type> ou type[] (p.ex.: string[], Array<number>, number[])
// o tipo any
var obj = { x: 0 };
// a seguir, nenhum erro ocorrerá
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
