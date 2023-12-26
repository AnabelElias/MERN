import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const {JWT_KEY}=process.env

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
        next(error)
    }
}
export const signIn=async(req,res,next)=>{
    const {username,email,password}=req.body;
    
    try {
        const existingUser= await UserModel.findOne({email});
        if(!existingUser){
            res.status(500).json({message:"user does not exist, please signUp"})
        }
        
     const comparePassword=bcryptjs.compareSync(password,existingUser.password);
         if(!comparePassword){
            res.status(500).json({message:"invalid credentials"})
         }
        const token=jwt.sign({id:existingUser._id,email:existingUser.email},JWT_KEY,{expiresIn:"2h"});  
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({existingUser,token})
    } catch (error) {
        next(error)
    }
}