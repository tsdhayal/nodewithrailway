const express = require("express");
const app = express();


app.get("/", (req, res)=>{
  res.send({data : "testing railway"});
});

app.listen(3000, ()=> console.log("run server 3000"));
    
