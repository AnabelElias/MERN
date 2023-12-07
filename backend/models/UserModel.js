import mongoose from "mongoose";

const validateEmail = (email)=> {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:"please write your username",
        unique:true
    },
   email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    } ,
    password:{
        type:String,
        required:"password is required" 
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;