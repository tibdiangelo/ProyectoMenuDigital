import { useState } from 'react'
import './App.css'
import Registro from "./registro"
import Login from "./login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro></Registro>
      <Login></Login>
    </>
  )
}

export default App
