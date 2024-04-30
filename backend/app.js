const express =require("express")
const app=express()
const bookRoute=require("./routes/booksRoute.js")
require("./connection/connection.js")

app.use(express.json())

app.use("/api/v1",bookRoute)

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.listen(3000,(err)=>{
    console.log("Server started")
})