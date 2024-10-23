import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Hello, I Am Sage Waweru!</h1>
    <div className="card">
 
      <h2> Count is {count}</h2> 
      <button onClick={()=>setCount(count+1)}>Add 1</button><br />
      <button onClick={()=>setCount(count-1)}>Minus 1</button><br />
      <button onClick={()=>setCount(count+10)}>Add 10</button><br />
      <button onClick={()=>setCount(count-10)}>Minus 10</button><br />
      <button onClick={()=>setCount(0)}>Reset</button><br />

    </div>
  </div>
  
  )
}

export default App
