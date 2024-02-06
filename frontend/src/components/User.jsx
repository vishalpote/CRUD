import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../utils/url"

const User = () => {
  const [user,setUser]=useState([])

  const navigate=useNavigate();

    const fetchdata=async()=>{
     try {
          const res = await axios.get(`${BASE_URL}`)
          const data = res.data.data;
          console.log(data);
          setUser(data);
     } catch (error) {
      console.log(error.message)
     }
    }
  useEffect( ()=>{
      fetchdata()
  },[])


  const handleDelete=async(id)=>{
      const res=axios.delete(`${BASE_URL}/delete/${id}`)
      window.location.reload();
      const result=res.data;
      console.log(result);
  }
  return (
    <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <Link to="/createuser" className="btn btn-success">ADD</Link>
            <table className="table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    user.length===0 ? navigate('/')
                    :
                    user.map((users)=>(
                      <>
                      <tr key={users.password}>
                        <td>{users.email}</td>
                        <td>{users.password}</td>
                        <td>
                          <Link to={`/updateuser/${users._id}`} className="btn btn-success m-2">Update</Link>
                          <button className=" btn btn-danger" onClick={()=>handleDelete(users._id)}>Delete</button>
                        </td>
                      </tr>
                      </>
                    ))
                  }
                </tbody>
            </table>
        </div>
     
    </div>
  )
}

export default User
