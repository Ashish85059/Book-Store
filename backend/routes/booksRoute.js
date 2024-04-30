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

router.get("/getBooks",async (req,res)=>{
    try {
        const books=await bookModel.find();
        res.status(200).json({books});
    } catch (error) {
        console.log(error)
    }
})

router.get("/getBook/:id",async (req,res)=>{
    const id=req.params.id;
    try {
        const book=await bookModel.findById(id);
        res.status(200).json({book});
    } catch (error) {
        console.log(error)
    }
})

router.post("/updateBook/:id",async(req,res)=>{
    let id=req.params.id
    try {
        const data=req.body;
        console.log(data)
        let book=await bookModel.findByIdAndUpdate(id,data);
        if(book){
            res.status(200).json({msg:"book updated successfully"})
        }
        
    } catch (error) {
        console.log("Error -> ",error)
    }
})

router.delete("/deleteBook/:id",async(req,res)=>{
    let id=req.params.id;
    try {
        await bookModel.findByIdAndDelete(id)
        .then(()=>res.status(200).json({msg:"Book deleted successfully"}))
    } catch (error) {
        console.log("Error",err)
    }
})


module.exports=router