import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User'
import Createuser from './components/Createuser';
import Updateuser from './components/Updateuser';
import Register from './auth/Register';
import Login from './auth/Login';
const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Register></Register>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/users' element={<User></User>}></Route>
                <Route path='/createuser' element={<Createuser></Createuser>}></Route>
                <Route path='/updateuser/:id' element={<Updateuser></Updateuser>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
