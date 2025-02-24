import { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {

  const [text, setText]= useState("")

  const changeHandler = (e)=>{
    setText(e.target.value)
  }

  return (
    <div>
      <Input change={changeHandler}/>
      <p>{text}</p>
    </div>
  );
}

export default App;
