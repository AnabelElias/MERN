import express from "express";
import userRoute from "./routes/userRoute.js"
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
const app=express();
const {PORT,MONGODB_URL}=process.env
//middlewares
app.use(express.json())
app.use(cors())
app.use("/user", userRoute);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
//connect to mongodb
mongoose.connect(MONGODB_URL)
.then(()=>{app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}!`)
})})
.catch((error)=>{
    console.log(error)
})
