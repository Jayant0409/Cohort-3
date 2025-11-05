const express=require("express");
const app =express();

app.get("/multiply/:a/:b",function(req,res) {
    const a=req.params.a;
    const b= req.params.b;

    res.json({
        ans: a*b
    }) 
});

app.get("/sum/:a/:b",function(req,res) {              //    for param
    const a=parseInt(req.params.a);             //    http://localhost:3000/sum/1/2
    const b= parseInt(req.params.b);

    res.json({
        ans: a + b
    }) 
});

app.get("/subtract",function(req,res) {                //      for Query parameters
    const a=req.query.a;                         //   http://localhost:3000/subtract?a=9&b=3  
    const b= req.query.b;

    res.json({
        ans: a-b
    }) 
});

app.get("/divide",function(req,res) {
    const a=req.query.a;
    const b= req.query.b;

    res.json({
        ans: a/b
    }) 
});
app.listen(3000)