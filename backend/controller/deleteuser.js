import User from "../model/user.js";

export const deleteuser=async(req,res)=>{
    const {id} = req.params;

    try {
        const user=await User.findById(id);
        if(!user){
            return res.status(401).json({message: 'User not found'})
        }

        const data=await User.findByIdAndDelete({_id:id})
        return res.status(200).json({message:"Delete User Successful",data:data})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }
}