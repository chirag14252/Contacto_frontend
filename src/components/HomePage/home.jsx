import { useNavigate } from "react-router-dom";
import "./home.css"
const home = ()=>{
  const navigate = useNavigate();
    return(
      <div>
       <h1>Contacto App</h1>
       <div>
        <img src="https://img.freepik.com/free-vector/phone_53876-25489.jpg" alt="" height="400" width ="400"/>
       </div>
       <button onClick={()=>{
        navigate("/login")
       }} className = "login">Login</button>
       <button onClick={
        ()=>{
        navigate("/register")
        }
       } class = "register">Register</button>
      </div>
    )
}


export default home;