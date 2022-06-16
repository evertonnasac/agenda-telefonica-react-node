import bus from "../events/bus"
import {useEffect, useState} from "react"
import styles from "./Message.module.css"

function Message (){
    
    const [message, setMessage] = useState("")
    const [visibility, setVisibility] = useState(false)
    const [type, setType] = useState()

    useEffect(()=>{
        bus.addListener("flash", ({message,type}) =>{
            setMessage(message)
            setType(type)
            setVisibility(true)

            setTimeout(()=>{
                setVisibility(false)
            }, 3000)

        })
    },[])

    return(
        visibility && 
        (<div className={`${styles.message} ${styles[type]}`}>{message} </div>)
    )

}

export default Message




