const express =require("express")
const app=express()
require("./connection/connection.js")

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.listen(3000,(err)=>{
    console.log("Server started")
})