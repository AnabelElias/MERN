import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
const app=express();
const {PORT,MONGODB_URL}=process.env
//middlewares
app.use(express.json())
app.use(cors())
//connect to mongodb
mongoose.connect(MONGODB_URL)
.then(()=>{app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}!`)
})})
.catch((error)=>{
    console.log(error)
})
