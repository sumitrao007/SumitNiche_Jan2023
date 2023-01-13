//type assertion
// any,object,unknown
var a:any;

// 1 angle bracket syntax
// 2 as syntax

// 1 angle bracket syntax
// it is used in ts file 
var temp=(<string>a);
// temp.

// 2 as synatx
// mostly used in html file 
var temp1=(a as string);
// temp1.


//Operators
//Airthmatic=> +,-,*,/,%
//bitwise => &,|,^,~,!,<<,>>
//logical => &&,||,!=
//conditional => <,>,!=
//relational=> >=,<=,==(it checks only value),===(strongly equality => it checks value as well as data type  )
//assignment=> =,+=,-=,/=,*=,%=
//unary => inc/dec, post/pre ++a,a--
//ternary => condition?expression1:expression2

//Control Statement
// if,if-else,nested if-else,if-else ladder,switch,break,continue
var a2:number=21;
// if(a2<4){
//     console.log("Condition is true")
// }else{
//     console.log("Condition is false") 
// }

var choice=2;
// switch(choice){
//     case 1: console.log("U r in case 1 ");
//             break;
//     case 2 : console.log("U r in case 2");
//             break;

//     default: console.log("U r in default case ");
//             break;

// }

//loop statement
// while,do-while,for,foreach
var count=4;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

// do{
//     console.log("Count is "+count);
//     count--;
// }while(count!=0);

//for loop

// for(var i=0;i<4;i++){
//     console.log("Index is "+i);
// }
// console.log("After the for loop i "+i);

// var => it has global scope 
// let => scope => within nearest block 
// it is keyward

// for(let i=0;i<4;i++){
//     console.log("Index is "+i);
// }
// console.log("After the for loop i "+i);

//const => it make ur data as constant
// scope=> it has global as well as local 

// const pi=3.14;
// pi=5;

// for(let i=0;i<4;i++){
//     const myi=i;
//     console.log("myi is "+myi)
//     console.log(pi)
// }
// console.log(myi);