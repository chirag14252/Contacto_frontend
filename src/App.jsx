import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from "./components/login/login.jsx"
import RegisterForm from './components/registerForm/registerForm.jsx'
import Contact from './components/contactShow/contact'
import ContactForm from './components/ContactForm/ContactForm'
import { Navigate } from 'react-router-dom'
import Home from './components/HomePage/home'
function App() {
  return (
   <Routes>
  
    <Route path = "/contact" Component={()=>{
      const token = localStorage.getItem("token");
      return token?<Contact/> : Navigate({to:"/home"});
    }}></Route>
    <Route path = "/add-contact" Component={()=>{
      const token = localStorage.getItem("token");
      return token?<ContactForm/> : Navigate({to:"/login"});
    }}></Route>
    <Route path = "/update-contact/:contact_id" Component={()=>{
      const token = localStorage.getItem("token");
      return token?<ContactForm/>: Navigate({to: "/login"});
    }}></Route>
    <Route path="/login" Component={Login}></Route>
    <Route path="/register" Component={RegisterForm}></Route>
    
    <Route path = "*" Component={Home}></Route>
    <Route path ="/" Component={Home}></Route>
    {/* because no path matches what user has entered */}
    
   </Routes>
  )
}

export default App
