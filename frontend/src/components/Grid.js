import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./Grid.module.css"
import flashMessage from "../events/flashMessage"
import api from "../api/axios"


function Grid (){

    const [list, setList] = useState([])
    let msgType
    
    useEffect(()=>{

        api.get("/get")
        .then((resp)=>{
            setList(resp.data)
        })
   

    },[])
        
    const removeContact = async (id) =>{

        const message = await api.delete(`remove/${id}`)
        .then((resp)=>{
            msgType = "success"
            return resp.data.message
        })
        .catch((err)=>{
            msgType = "error"
            return err.resp.data
        })

        flashMessage( msgType, message)

        api.get("/get")
        .then((resp)=>{
            setList(resp.data)
        })
    }

    return (
        <section >
         <Link to = "/create">Adicionar contato</Link>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {list.map((contact)=> 
                    <tr key={contact.id}>
                        <td>{contact.image}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>
                            <div className={styles.grid_actions}>
                                <Link to = 
                                {`/edit/?name=${contact.name}&email=${contact.email} &phone=${contact.phone}&id=${contact.id}&image=${contact.image}`}
                                className={styles.link_edit} >Editar</Link>
                                <a onClick={()=>removeContact(contact.id)} className={styles.link_delete}>Excluir</a>
                            </div>
                            </td>
                    </tr>)}
                </tbody>
            </table>
        </section>
    )
}
export default Grid

