import { useState } from 'react'
import './App.css'

function Child({userName}){
  return <h2> welcome {userName}</h2>
}

function App(){
  const [userName , setuserName] = useState("Hiva")
  return (
    <h1>
      <Child userName={userName}/>
    </h1>
  )
}

export default App;
