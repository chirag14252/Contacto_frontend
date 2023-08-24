import InstanceAxios from "../../axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./contact.css"
const Contact = () => {
    const fetchContacts = () => {
        InstanceAxios().get("/get-contacts").then((res) => {
            SetContact(res.data.contact);
        })
    }


    const [getContact, SetContact] = useState([]);
    const navigate = useNavigate();

    //  to delete the data

    useEffect(() => {
        fetchContacts();
    }, [])
    return (
        <>
        <button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }} class= "logout">LogOut</button>
                
    <button onClick={() => {
                        navigate("/add-contact")
                    }} class ="add-contacts">Add contacts</button>
                <h1>Your Contacts</h1>
            <>{
                (getContact.length > 0) ?
                    (<table id = "customers">
                        <tr>
                            <th>Name </th>
                            <th>Phone Number</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Action</th>
                        </tr>
                        <tbody>
                            {
                                getContact.map((contactUser, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{contactUser.name}</td>
                                            <td>{contactUser.contact}</td>
                                            <td><button onClick={() => { navigate("/update-contact/" + contactUser._id) }}>Edit</button></td>
                                            <td><button onClick={() => {
                                                InstanceAxios().delete("/delete-contact/" + contactUser._id).then(
                                                    () => {
                                                        fetchContacts();
                                                    }
                                                )
                                            }}>delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>) : (<p class="data">No data Available...</p>)}
            </>
        </>
    )
}


export default Contact;