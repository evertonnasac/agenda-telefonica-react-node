import { Link } from "react-router-dom"
import styleForm from "./Container.module.css"


function Container ({children}){
    return(
        <>  

            <div className={styleForm.head}>
                <h2 className={styleForm.title}>AGENDA</h2>
            </div>
               

            <div className="grid">
                {children}
            </div>

        </>

    )
}

export default Container