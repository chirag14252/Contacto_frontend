import { useState } from "react";
import "./login.css"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import InstanceAxios from "../../axios"
import { useNavigate } from "react-router-dom";
const Login = ()=>{
  const navigate = useNavigate();
  const [username,Setusername] = useState("");
  const [password,setPassword] = useState("");
  const EnterUser = (e)=>{
    e.preventDefault();
    const reqBody = {
        "username":username,
        "password":password
    }
    let dataToastify;
    InstanceAxios().post("/login",reqBody).then(
        (res)=>{
          // toast(res.data.message);
           Setusername("");
           setPassword("");
           const token = res.data.token;
           localStorage.setItem("token",token);
           toast.success("you are logged in");
           navigate("/contact");
        }
      )
      .catch((err)=>{
        toast.error(err.response.data.message);
       
      })
    }
return(
 <>
 <h1>Login</h1>
 <form onSubmit={EnterUser}>
  <label htmlFor="username" style={{float:"left"}}>Username</label>
   <input type="text" name="username" id="username" value= {username} onChange={(e)=>{
    Setusername(e.target.value);
   }}/>
   <br />
   <br />
  <label htmlFor="password" style={{float:"left"}}>Password</label>
  <input type="password" id = "password" name = "password" value = {password} onChange={(e)=>{
  setPassword(e.target.value);
  }}/>
  <br />
  <br />
  <button type="Submit">Login</button>
  <button onClick = {()=>{
    navigate("/");
  }} className ="return">Return to Home Page</button>
 </form>
 <ToastContainer />
</>
    )
}

export default Login;