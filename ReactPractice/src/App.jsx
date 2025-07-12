import { useState } from "react"
import Name from "./Name"

function App() {
  let [count,setCount] = useState(5)
  const addValue = () =>{
    if(count<20){
    setCount(count+1)
    }
  }
  const decValue = () =>{
    if(count>0){
    setCount(count-1)
    }
  }

  const surname = "Thakur"

  return (
    <>
    <Name username="Ronit" />
    <h2>Counter Value:{count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
