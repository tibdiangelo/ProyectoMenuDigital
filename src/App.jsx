import { useState } from 'react'
import './App.css'
import Registro from "./registro"
import Login from "./login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Registro></Registro></div>
      <div><Login></Login></div>
    </>
  )
}

export default App
