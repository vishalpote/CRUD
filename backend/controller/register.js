import User from "../model/user.js";
// import bcrypt from 'bcryptjs';

export const register=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(401).json({message:"Please Enter The Valid Fields..!!"})
    }
   try {
            const user=await User.findOne({email:email})
        if(user){
            return res.status(401).json({message:"User Already Exists..!!"})
        }

        // const hashpassword=bcrypt.hashSync(password,12)
        const newuser=await User({email:email,password:password})
        await newuser.save();
        return res.status(200).json({message:"User Register Succesfull..!!"});
   } catch (error) {
        return res.status(500).json({message:"Internal Server Error..!!"});
   }
}