 //map  , filter, arrow fnc.

 // given an array, give me back a new array in which every
 //  value is multiplied by 7

 // [1,2,3,4,5]
 // [2,4,6,8,10]

 const arr = [1,2,3,4,5]  

   function transform(i){
    return i*2;

   }
function map(arr,transform){
    const resArray=[]
    for (let i=0; i <arr.length; i++) {
        
        resArray.push(transform(arr[i])); 
    }
    console.log(resArray);
    
}
map()
//    const ans = arr.map(transform);
//    console.log(ans);


//    const as = arr.map(transform)
//    console.log(as)

/*
  // second way same
   const ans2 = arr.map(function (i){
    return i*2;
   });
   console.log(ans2);



              // filtering 

     // what if I tell u , given an input  array, give 
     // me back all the even values from it
 
      const ar = [1,2,3,4,5,6]

      function flt(n){
        if(i%2==0){
            return true;
        }
        else{
            return false
        }
      }

      const answ = ar.filter(flt)
      console.log(answ)

     
     // similar way

      const answw = ar.filter((n)=> {
        if(i%2==0){
            return true;
        }
        else{
            return false
        }
      })
      console.log(answw)

       */