//4 basic types
// 1 functions without parameter & without return type
// 2 functions with parameter & without return type
// 3 functions without parameter & with return type
// 4 functions with parameter & with return type
// 1 functions without parameter & without return type
function add1() {
    console.log("First type function is called ");
}
// add1();
// 2 functions with parameter & without return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(2,3);
// 3 functions without parameter & with return type
function add3() {
    return (5 + 5);
}
// let res=add3();
// console.log("Result is "+res);
// 4 functions with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("\n        Addition ".concat(add4(4, 5), "\n    "));
