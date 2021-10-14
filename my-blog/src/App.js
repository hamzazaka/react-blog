
import { useState } from 'react';
import './App.css';
import groceries from './groceries-data';


function App() {

  const [bought,setBought]=useState([])
  //  console.log(setBought);
  const delItem=(e)=>{
     console.log(e.value);
  }


  console.log(groceries);
  let prices=0;
  groceries.map((hh)=>prices+=Number(hh.price))
  console.log(prices);
  return (
    <div className="grocery-app">
      
      <h1>My Groceries</h1>
      {groceries.map((hh,value)=>(
        <div className='grocery-list' key={value} >
         <h4>{hh.item} - {hh.brand}</h4>
         <h4>{hh.quantity}</h4>
         <h4>{hh.price}$</h4>
         <button onClick={(e)=>delItem(e)} >click me</button>
         </div>
      ))}
      
        <p> Total : {prices}</p>
      
    </div>
  );
}

export default App;
