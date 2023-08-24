import "./registerForm.css"
import { useState } from "react"
import axios from "axios"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const RegisterForm = ()=>{
const navigate = useNavigate();
const [name,SetName] = useState("");
const [username,Setusername] = useState("");
const [password,setPassword] = useState("");
// const [dataRegister,setDataRegister] = useState(null);

const addUser = (e)=>{
e.preventDefault();
const reqBody = {
    "name":name,
    "username":username,
    "password":password
}
axios.post("http://localhost:3000/register",reqBody).then(
    (res)=>{
       SetName("");
       Setusername("");
       setPassword("");
       toast(res.data.message);
    }
  )
  .catch((err)=>{
    toast(err.response.data.message)
  })
}

return(
  <div>
  <h1>Register</h1>
 <div>
 <form onSubmit={addUser}>
    <label htmlFor="name">Name  </label>
    <input type="text" name="name" id="name" value = {name} onChange={(e)=>{
       SetName(e.target.value);
    }}/>
    <br />
    <br />
    <label htmlFor="username">UserName</label>
    <input type="text" name="username" id="username" value ={username} onChange={
        (e)=>{
            Setusername(e.target.value);
        }
    }/>
    <br />
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" name = "password" id = "password" value = {password} onChange={
        (e)=>{
          setPassword(e.target.value);
        }
    }/>
    <br />
    <br />
    <button type="submit">Register</button>
    <button className ="back" onClick={()=>{
      navigate("/")
    }}>Back to Home Page</button>
 </form>
 <ToastContainer />
 </div>
 </div>
)
}

export default RegisterForm;