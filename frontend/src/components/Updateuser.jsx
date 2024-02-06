import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/url";


const Updateuser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const {id}=useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(`${BASE_URL}/users/${id}`,{email,password})
    const result = res.data.email;
    console.log(result);
    navigate('/users');
  }

  
  return (
    <div>
      <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <div className="mb-3">
              <label htmlFor="" >Email :</label>
              <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />

            </div>
            <div className="mb-3">
              <label htmlFor="" >Password :</label>
              <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Updateuser
