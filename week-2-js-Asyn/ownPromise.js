     // make your own promise



/* function waitFor3S(resolve){
    console.log(resolve);
    setTimeout(resolve,3000)
    console.log("hello");
   
}
function setTimeoutPromisified(){
    return new Promise(waitFor3S);
}

function main(){
    console.log("main is called")
}

setTimeoutPromisified().then(main);
*/  

/*
function random(resolve) {
    setTimeout(resolve,3000);

}

let p= new Promise(random); // supposed to return u something eventually 


// using the eventually value returned by the promise
 function callback() {
    console.log("Promise succeded");
    }

    p.then(callback);
console.log(p);

*/

//Promisefied version of fs.readFile

const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {

    fs.readFile("a.txt","utf-8", function(err,data){
        sendTheFileValueHere(data);
    })
}

function readFile(fileName){
    //read new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
    console.log(contents);
}
   p.then(callback);