import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const database=process.env.DATABASE;
const connection=()=>{
    mongoose.connect(`${database}/CRUD`)
    .then(()=>console.log("Mongo Db Databse Connected Succesfully..!!"))
    .catch((error)=>console.log(error.message));
}


export default connection;

