import { useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:7001/api/v1/login', { email, password })
        const result = res.data.data;
        console.log(result);
        navigate('/users');
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className=" d-flex vh-100 bg-primary  justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="" >Email :</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="" >Password :</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p className="mt-3">Do not Have Account ? <Link to="/">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
