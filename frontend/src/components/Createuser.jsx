import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/url";
const Createuser = () => {
  
const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();

    const res = await axios.post(`${BASE_URL}/createuser`,{email,password})
    const result=res.data.data;
    console.log(result);
    navigate('/users');
  }

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
      <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <div className="mb-3">
          <label htmlFor="" >Email :</label>
          <input type="email" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="" >Password :</label>
          <input type="password" className="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Createuser
