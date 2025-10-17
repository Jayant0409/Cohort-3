 const express = require('express');

 const app=express();

 function isOldEnough(){
    if(age>=14)
        return true;
    else
    return false;
    

 }
 app.get("/ride1", function(req,res){
    if(isOldEnough(req.query.age)){
       res.json({
        msg:"you have successfully booked a ride"
       })
    }
    else{
        res.status(411).json({
            msg: "Sorryyou are not of age yet"
        })
    }
});
app.listen(3000);
