import React from 'react';
import ReactDOM from 'react-dom/client';

function TableRow({name}){
      return (
            <tr>
                  <td>{name}</td>
            </tr>
      );
}

function Greet(){
      alert("Hello");
}  
    
const myelement = (
      <>

      <h1>Hello React</h1>

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

      <button onClick={Greet}>click here</button>
      </>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);

