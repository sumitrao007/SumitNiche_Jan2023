//basics of array
// array is growable & shrinkable dynamically 
// array store homogenous value as well as hetrogenous value

let a:number[]=[2,3,5,6];
let a1:number[]=[];
let a3=[7,8,63,45];
let a4=[2.5,'Sumit',8];
let a5:any[]=[2.5,'Sumit',true];

// for(let i=0;i<a.length;i++){
//     console.log("Array is "+a[i]);
// }

// console.log(a5);
// console.log(a5.join("#"));
// console.log(a5.join(" "));

a5.forEach((myvalue,i)=>{
    console.log(`
        Myvalue is ${myvalue} and its index is ${i}
    `)
});


