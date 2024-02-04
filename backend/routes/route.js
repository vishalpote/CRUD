import express from 'express';
import User from '../model/user.js';
import { getdata } from '../controller/getdata.js';
import { updateuser } from '../controller/updateuser.js';
import { createuser } from '../controller/createuser.js';
import { deleteuser } from '../controller/deleteuser.js';
import { register } from '../controller/register.js';
import { login } from '../controller/login.js';

const router=express.Router();


router.get('/',getdata,(req,res)=>{
    res.send("Welcome")
})



router.put('/users/:id', updateuser);



router.post('/createuser',createuser);


router.delete('/delete/:id',deleteuser);


router.post('/register',register);


router.post('/login',login);


export default router;