import React from 'react'
import 'app.css'
import registro from "./registro"
import Login from "./Login"

function app (){
    const [count,setCount]=useState(0)
    
    return (
        <>
        <div><Registro></Registro></div>
        <div><Login></Login></div>
        </>
    )

}

export default app