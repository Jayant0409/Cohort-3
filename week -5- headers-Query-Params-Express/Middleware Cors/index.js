const express=require("express");
const app =express();

let requestCount=0

function requestIncreaser(req,res,next){
    requestCount = requestCount + 1;
    console.log("Total number of request " + requestCount);
    req.requestCount= "Hello..."
    next();
    
}

function requestHandler(req,res){
    
    // main logic                        
    const a=parseInt(req.params.a);            //    for params   
    const b= parseInt(req.params.b);            //    http://localhost:3000/sum/1/2
    console.log(req.requestCount);
    

    res.json({
        ans: a + b
    }) 
}

app.get("/sum/:a/:b", requestIncreaser, requestHandler);

app.get("/subtract",function(req,res) {
    requestIncreaser(req,res);    
    
     // main logic                                  
    const a=req.query.a;                      //      for Query parameters    
    const b= req.query.b;                //   http://localhost:3000/subtract?a=9&b=3 

    res.json({
        ans: a-b
    }) 
});

app.get("/divide",function(req,res) {
    requestIncreaser(req,res); 

   //  main logic
    const a=req.query.a;
    const b= req.query.b;

    res.json({
        ans: a/b
    }) 
});

app.get("/multiply/:a/:b",function(req,res) {
    requestIncreaser(req,res);

    //  main logic
    const a=req.params.a;
    const b= req.params.b;

    res.json({
        ans: a*b
    }) 
});

app.listen(3000)