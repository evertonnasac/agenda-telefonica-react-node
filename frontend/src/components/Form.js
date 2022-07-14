import {Link, useLocation, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import stylesForm from "./Form.module.css"
import api from "../api/axios"
import flashMessage from "../events/flashMessage"



function Form(){

    const [contact, setContact] = useState({})
    const navigate = useNavigate()
    const {search} = useLocation()

    useEffect(()=>{

        const searchParams = new URLSearchParams(search)
        if(searchParams.get("id")){
            const id = searchParams.get("id")
            const name = searchParams.get("name")
            const email = searchParams.get("email")
            const phone = searchParams.get("phone")
            const image = searchParams.get("image")
            setContact({id, name, email, phone, image})
        }
        
    },[search])

    const apiConnect = async (contact) =>{

       if(contact.id){

            await api.put(`/edit/${contact.id}`, contact)
            .then((resp)=>{
                flashMessage("success", resp.data.message)
                navigate("/")
            })
            .catch((err)=>{
                const message = err.response.data.message
                flashMessage("error", message)
            })
          
       }

       else{ 
            api.post("/add", contact)
            .then((res)=>{
                flashMessage("success", res.data.message)
                navigate("/")
            })
            .catch((err)=>{
                flashMessage("error", err.response.data.message)
            })
     
            
        }

    }

    function handleSubmit(e){
        e.preventDefault()
        apiConnect(contact)
    }

    function handleChange(e){
        e.preventDefault()
        setContact({...contact, [e.target.name]: e.target.value})

    }
    
    return (
        <section className={stylesForm.form_container}>
            <form onSubmit={handleSubmit} className={stylesForm.form_control}>
            <label htmlFor = "name ">Nome:</label>
                <input 
                name = "name"
                type="text"
                value={contact.name || ""}
                onChange = {handleChange}
                />
                <label htmlFor = "phone ">Telefone:</label>
                <input
                name = "phone"
                type= "phone"
                value={contact.phone|| ""}
                onChange = {handleChange}
                />
                <label htmlFor = "email ">E-mail:</label>
                <input
                name = "email"
                type = "email"
                value={contact.email|| ""}
                onChange = {handleChange}
                />

                <label htmlFor = "image ">Foto:</label>
                <input
                name = "image"
                type = "text"
                value={contact.image|| ""}
                onChange = {handleChange}
                />

                <div className={stylesForm.actions}>

                    <input type = "submit" value={(contact.id)? "Editar" : "Adicionar"}/>
                    <Link to = "/" className = {stylesForm.voltar}>Voltar</Link>

                </div>
                
            </form>
        </section>
        
    )
}

export default Form