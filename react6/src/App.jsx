import { useState } from "react";
import "./App.css";

const Counter = ({defaultCounter})=>{
  const[cartCount, setCartCount]= useState(defaultCounter || 0)
  return(
    <div>
    <button onClick={()=> setCartCount(cartCount+1) }>+</button>
    {cartCount}
    <button onClick={()=> {
      if(cartCount>0){
        setCartCount(cartCount-1)}
      } }>-</button>
    </div>
  )
}

const ProductItem = ({ name, count }) => {
  return (
    <div
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      {name}
      <div><Counter defaultCounter={count}/></div>
    </div>
  );
};

const Shop = ({ productsList }) => {
  return (
    <div>
      {productsList.map(({ name, count }) => {
        return <ProductItem name={name} count={count} />;
      })}
    </div>
  );
};

function App() {
  const products = [
    { name: "playStation", count: 0 },
    {
      name: "iphone15",
      count: 0,
    },
    {
      name: "speaker",
      count: 0,
    },
  ];
  return (
    <div>
      <h2>Shopping List</h2>
      <Shop productsList={products} />
    </div>
  );
}

export default App;
