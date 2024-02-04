import User from "../model/user.js";


export const getdata=async(req,res)=>{
    try {
        const data=await User.find({})

        return res.status(200).json({message:"Fetch Data Successfully",data:data})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}