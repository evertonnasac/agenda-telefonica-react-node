import { Link } from "react-router-dom"


function Container ({children}){
    return(
        <div>
            <h1>Agenda Telefônica</h1>

            {children}
        </div>
    )
}

export default Container