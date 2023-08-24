import axios from "axios";
config();
import { config } from 'dotenv';
const InstanceAxios = () =>{
    const token = localStorage.getItem("token");
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
       Authorization : "bearer "+token,
    },
  })
}


export default InstanceAxios;