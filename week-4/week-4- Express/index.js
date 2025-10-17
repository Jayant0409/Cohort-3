// creating a htp server
// express

const express = require("express"); 

 const app= express();                                   // Request Methods
                                               // GET - when we are asking something from the server
                                               // POST - when we put some data in my backend or just like creating any post on linkdin/insta. etc..
                                               // PUT - when we update or replace the data on backend, like changing passwords, etc
                                               // DELETE -  when we want to delete the data from the backend;
 function sum(n){                               
   let ans = 0;
   for(let i=1;i<=n;i++){                       //       Status Codes
      ans=ans+i;                                // These tell or show the frontend developer that everything on backend is fine or not;
   }                                            //  200 - everything is fine 
   return ans;                                  //  404 - when routs does not exists;
 }                                              //  500 - something wents wrong
                                                //  403 - 
                                                // importance onces are 200,404,403
 app.get('/',function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("Hi your ans is"+ans)
 })


 app.listen(3000);