const express=require("express");
const mongoose=require("mongoose");
const router = require("./routes/Products.routes");
require("dotenv").config();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/products",router)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server works on port 3000")
    })
}).catch((err)=>{
    console.log("Error",err.message)
})

