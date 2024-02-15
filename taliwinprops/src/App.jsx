import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username="Dilip" Agg="23"/>
    </>
  )
}

export default App
