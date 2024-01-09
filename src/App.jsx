import { useState } from 'react'
import './App.css'
import Accoridian from './components/accodium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accoridian />
    </>
  )
}

export default App
