const express = require("express"); 
const bodyParser = require("body-parser");           // It parse the body, means the data which we send during POST request

const app = express();

app.use(bodyParser.json());

app.post("/sum",function(req, res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);
