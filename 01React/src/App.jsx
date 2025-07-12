
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setColor] = useState("aqua")

  return (
      <div id='main' style={{backgroundColor:color}}>
       <div id='color'>
      <button onClick={()=> setColor("red") } className='button' id='btn1'>red</button>
      <button onClick={()=> setColor("blue")} className='button' id='btn2'>blue</button>
      <button onClick={()=> setColor("green")} className='button' id='btn3'>green</button>
      <button onClick={()=> setColor("yellow")} className='button' id='btn4'>yellow</button>
    </div>
      </div>
    
  )
}

export default App
