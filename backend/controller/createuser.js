import User from "../model/user.js";


export const createuser=async(req,res)=>{
    const {email,password} = req.body;
    try {
       const user=await User.findOne({email: email});
        if(user){
            return res.status(401).json({message:"User Already Exists"});
        }
         await User.create({email: email, password: password})
        return res.status(200).json({message:"User Created Successfully"});
        
    } catch (error) {
        return res.status(500).json({message:"Error Occours"});
    }
}