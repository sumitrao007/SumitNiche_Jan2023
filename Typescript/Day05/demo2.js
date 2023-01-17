//basics of array
// array is growable & shrinkable dynamically 
// array store homogenous value as well as hetrogenous value
var a = [2, 3, 5, 6];
var a1 = [];
var a3 = [7, 8, 63, 45];
var a4 = [2.5, 'Sumit', 8];
var a5 = [2.5, 'Sumit', true];
// for(let i=0;i<a.length;i++){
//     console.log("Array is "+a[i]);
// }
// console.log(a5);
// console.log(a5.join("#"));
// console.log(a5.join(" "));
a5.forEach(function (myvalue, i) {
    console.log("\n        Myvalue is ".concat(myvalue, " and its index is ").concat(i, "\n    "));
});
