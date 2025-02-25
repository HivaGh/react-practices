import { useState } from "react";
import Card from "./components/Card";

const Close = ()=>{
  return(
    alert("close")
  )
}

function App() {
  return (
    <div>
      <Card close={Close} style={{color: "blue"}} disabled >
        hi
      </Card>
      <Card close={Close}>
        hi
      </Card>
    </div>
  )

}

export default App;

