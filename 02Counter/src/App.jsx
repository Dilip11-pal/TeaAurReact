import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] =useState(1)

const Addnumber=()=>{
  if(count<=20)
  {
  count=count+1;
  setCount(count)
  }
}
const Removenumber=()=>{
  if(count>0)
  {
  count =count -1;
  setCount(count)
  }
}
  return (
    <>
    <h1>Add and  Remove Number</h1>
    <p> Total:{count}</p>
    <button onClick={Addnumber}> Add number</button>
    <button onClick={Removenumber}> Remove number</button>
    </>
  )
}

export default App
