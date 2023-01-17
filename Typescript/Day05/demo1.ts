//anonymous functions
// function does not have any name 
let temp=function (){
    console.log("anonymous functions is called ");
}

// temp();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

// let res=temp2(2,3)
// console.log("Result is "+res);

// fat arrow function/Arrow function 
//Advanced version of anonymous functions

  let temp3=()=>{
        console.log("Fat Arrow function is called")
    }

    // temp3();
    let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // console.log("Addition is "+temp4(2,3));

//optional parameter functions

function add1(a:number,b?:number){
    console.log("value of a "+a) //4
    console.log("value of b "+b); // Undefined
    console.log("Addition of a+b "+(a+b!)) //NAN
}
// add1(4);
function add2(a?:number,b?:number){
    console.log("value of a "+a) //4
    console.log("value of b "+b); // Undefined
    console.log("Addition of a+b "+(a!+b!)) //NAN
}

// add2();
// add2(7,3);

//default parameter functions

function add3(a:number,b:number=7){
    console.log("value of a "+a) //5
    console.log("value of b "+b); // 7
    console.log("Addition of a+b "+(a!+b!)) //12
}

// add3(5);

function add4(a:number=8,b:number){
    console.log("value of a "+a) //5
    console.log("value of b "+b); // 7
    console.log("Addition of a+b "+(a!+b!)) //12
}

// add4(4,6);
function add5(a:number=8,b?:number){
    console.log("value of a "+a) //5
    console.log("value of b "+b); // 7
    console.log("Addition of a+b "+(a!+b!)) //12
}
// add5();




    



