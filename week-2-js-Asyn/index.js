// const { constants } = require("crypto");
// const f = require("fs"); //fs is a library, file system

// const data=f.readFileSync("a.txt","utf-8");
// console.log(data);


// function add(n)
// {
//     let sum =0;
//     for(let i=0;i<=n;i++)
//     {
//         sum= sum+i;

//     }
//     return sum;
// }
// let a=6;
// console.log(add(a))
 


// function sum(a,b)
// {
//     return a+b;
// }
// function subtract(a,b)
// {
//     return a-b;
// }
//  function multi(a,b)
//  {
//     return a*b;
//  }
//   function doOperation(a,b,fun)
//   {
//     return fun(a,b)

//   }
//   console.log(doOperation(3,4,subtract))

// 

function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second();


