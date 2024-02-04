import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

userSchema.methods.generateAuthToken=async function(){
   try {
         const token=jwt.sign({_id:this._id},secret_key,{expiresIn:'60s'});
        this.tokens=this.tokens.concat({token:token});
        // console.log(token)
        await this.save();
   } catch (error) {
        console.log(error.message);
   }
}

const User=mongoose.model('user',userSchema);

export default User;