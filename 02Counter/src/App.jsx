import { useState } from 'react'
import './App.css'

function App() {  
  const addValue = ()=>{
    if(counter != 20){
      setCounter(counter + 1)
    }
  }
  const removeValue = () =>{
    if(counter != 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Hello World!</h1>

      <h2>Coutner Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Decrise Value</button>
    </>
  )
}

export default App;  
