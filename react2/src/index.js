import React from 'react';
import ReactDOM from 'react-dom/client';

function TableRow({name}){
      return (
            <tr>
                  <td>{name}</td>
            </tr>
      );
}

function Greet(a){
      return alert(a);
}  

function Car(props){
      return <h2>I have a {props.color} car</h2>
}

function Garage(props){
      return <>
      <h1>Who has a car in my garage?</h1>
      <Car color = {props.color}/>
      </>
}
    
const myelement = (
      <>
      <h1>React is {5+5} times better with JSX</h1>
      <Car color = "red"/>
      <Garage color = "blue"/>
      <table border="1" width={200}>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      < TableRow name={"Hiva"} />
      < TableRow name={"Mina"} />
      < TableRow name={"Zahra"} />
      </tbody>
      </table>

      <button onClick={()=> Greet("Hello")}>click here</button>
      </>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);

