//anonymous functions
// function does not have any name 
var temp = function () {
    console.log("anonymous functions is called ");
};
// temp();
var temp2 = function (a, b) {
    return (a + b);
};
// let res=temp2(2,3)
// console.log("Result is "+res);
// fat arrow function/Arrow function 
//Advanced version of anonymous functions
var temp3 = function () {
    console.log("Fat Arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp4(2,3));
//optional parameter functions
function add1(a, b) {
    console.log("value of a " + a); //4
    console.log("value of b " + b); // Undefined
    console.log("Addition of a+b " + (a + b)); //NAN
}
// add1(4);
function add2(a, b) {
    console.log("value of a " + a); //4
    console.log("value of b " + b); // Undefined
    console.log("Addition of a+b " + (a + b)); //NAN
}
// add2();
// add2(7,3);
//default parameter functions
function add3(a, b) {
    if (b === void 0) { b = 7; }
    console.log("value of a " + a); //5
    console.log("value of b " + b); // 7
    console.log("Addition of a+b " + (a + b)); //12
}
// add3(5);
function add4(a, b) {
    if (a === void 0) { a = 8; }
    console.log("value of a " + a); //5
    console.log("value of b " + b); // 7
    console.log("Addition of a+b " + (a + b)); //12
}
// add4(4,6);
function add5(a, b) {
    if (a === void 0) { a = 8; }
    console.log("value of a " + a); //5
    console.log("value of b " + b); // 7
    console.log("Addition of a+b " + (a + b)); //12
}
add5();
