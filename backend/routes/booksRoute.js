const express=require("express");
const router=express.Router()

const bookModel=require("../models/booksModel.js")


router.post("/add",async(req,res)=>{
    try {
        const data=req.body;
        const newBook=new bookModel(data);
        await newBook.save()
        .then((response)=>{
            res.status(200).json({message:"Book added Successfully"})
        });
    } catch (error) {
        console.log("Error -> ",error)
    }
})

module.exports=router