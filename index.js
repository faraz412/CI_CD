const express=require("express");
require("dotenv").config();

const app=express();

app.get("/", (req,res)=>{
    res.send("Success");
})

app.listen(process.env.port, ()=>{
    console.log(`app listening on ${process.env.port}`);
})