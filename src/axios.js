import axios from "axios";
import { config } from 'dotenv';

const InstanceAxios = () =>{
    const token = localStorage.getItem("token");
  return axios.create({
    baseURL:"https://contactoappbackend-production.up.railway.app",
    headers: {
      'Content-Type': 'application/json',
       Authorization : "bearer "+token,
    },
  })
}


export default InstanceAxios;