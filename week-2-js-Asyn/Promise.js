// Promise class gives u a promise, that I will return u a 
// something in the future 
// like setTimeout(fn,3000)

function firstname(){
    console.log("Harkirat");
    
}
setTimeout(firstname,5000)



//returns an object of the Promise class
function setTimeoutPromisified(ms){
  let p = new Promise(resolve => setTimeout(resolve, ms));
   return p;
 //returning object of a promise class
}

function setTimeoutPromisified(){
    return new Promise();
}

function callback(){
    console.log("3 seconds have passed");  
}
   setTimeoutPromisified(3000).then(callback);
  

   let p= setTimeoutPromisified(5000); //object of the Promise class
    console.log(p);

 
