import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs"

export const signUp=async(req,res,next)=>{
    const {username,email,password}=req.body;
    
    try {
        const existingUser= await UserModel.findOne({email});
        if(existingUser){
            res.status(500).json({message:"user already exists please signin"})
        }
        
     const hashpassword=bcryptjs.hashSync(password,10);
        const newUser=await  UserModel.create({username,email,password:hashpassword});
        res.status(200).json({newUser})
    } catch (error) {
        console.log({message:error.message});
    }
}