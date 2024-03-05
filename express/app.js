const express = require('express');
const app = express();
app.get('/',(req,res)=> {
    res.send("welcome to express.js");
});
app.listen(4000,()=>{
    console.log("listening to the port 4000");
});