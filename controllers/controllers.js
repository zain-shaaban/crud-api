const Product=require("../models/products.model");

const Get_All_Products=async(req,res)=>{
    try{const products=await Product.find();
    res.json({products});}
    catch(error){
        res.status(500).json({message:err.message});
    }
}

const Get_Single_Product=async(req,res)=>{
    try{
        const id=req.params.id;
        const prod=await Product.findOne({ _id: id });
        if(!prod){
            return res.status(404).send("this product is not exist")
        }
        res.json({product:prod});}
    catch(error){
        res.status(500).json({message:err.message});
    }
}

const Update_Product=async(req,res)=>{
    try{const id=req.params.id;
    const updateProduct=await Product.findOneAndUpdate({_id:id},req.body,{runValidators:true,new:true});
    if(!updateProduct){
        return res.status(404).json({message:"this product is not exist"})
    }
    res.status(201).json({product:updateProduct});}
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const Delete_Product=async(req,res)=>{
    try{const id=req.params.id;
    const isExist=await Product.findOne({_id:id});
    if(!isExist){
        return res.status(404).json({message:"this product is not exist"})
    }
    const productDeleted=await Product.deleteOne({_id:id});
    res.status(200).json(productDeleted);}catch(error){
        res.status(500).json({mesage:error.message})
    }
}

const Add_Product=async(req,res)=>{
    try{
        const data=req.body;
        const newProduct=await Product.create(data);
        res.status(201).json(newProduct)
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={
    Add_Product,
    Get_All_Products,
    Get_Single_Product,
    Update_Product,
    Delete_Product
}