const express =require("express");
const app =express()

//route handlers
app.get('/',function(req,res){
    res.send("<b>Hi There</b>")
})

app.listen(3000)  // which port


//  Assignment