import { useEffect, useState } from "react";
import InstanceAxios from "../../axios";
import { useNavigate ,useLocation } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./ContactForm.css"
const ContactForm = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [name,setname] = useState("");
    const [phone,setPhone] = useState("");
    //search for unique id for updation
    const LocationSplit = location.pathname.split("/");
    console.log(LocationSplit);
    let unique_id;
    let route = LocationSplit[1];
    //because I wanted to show the data on update/edit
    const getData = ()=>{
        unique_id = LocationSplit[2];
        InstanceAxios().get("/get-contact/"+unique_id).then(
            (res)=>{
               setname(res.data.contact.name);
               setPhone(res.data.contact.contact);
            }
        )
    }
    //for rendering the details of updation on page load itelf
    useEffect(()=>{
        if(route == "update-contact"){
        getData();
        }
    },[])

    //for adding Contact
    const enterData = (e)=>{
    e.preventDefault();
    const reqbody = {
            "name": name,
            "contact": phone,
    }
    if(route == "add-contact"){
    InstanceAxios().post("/add-contact",reqbody).then(
        ()=>{
            navigate("/contact");
        }
        
    ).catch((err)=>{
     console.log(err.response.data.message);
     toast(err.response.data.message);
    });
    }
    else{
        const reqbody = {
            "contact": phone,
        }
        InstanceAxios().patch("/update-contact/"+LocationSplit[2],reqbody).then(
            ()=>{
                navigate("/contact");
            }
        ).catch((err)=>{
        console.log(err.response.data.message);
        toast(err.response.data.message);
        })
    }
    }

    return(
        <>
        <h1>Contact Form</h1>
       <form onSubmit={enterData}>
       <label htmlFor="name">name </label>
       <input type="text" name="name" id = "name" onChange={(e)=>{
       setname(e.target.value);
       console.log(e.target.value);
       }} value={name}/>
       <br />
       <br />
       <label htmlFor="phone">Phone number</label>
       <input type="text" name = "phone" id = "phone" onChange={(e)=>{
        setPhone(e.target.value);
       }} value={phone}/>
       <br />
       <br />
       <button class = "add-data" onSubmit={ContactForm}>{(route === "add-contact")?("add"):("update")}</button>
       </form>
       <ToastContainer/>
    </>
     
    )
}

export default ContactForm;