import React, { useState } from 'react'

export default function grocery({groceries}) {
    // setmyGrocery(groceries)
    // const [mygrocery,setmyGrocery]=useState(groceries);

    let price=0;
    groceries.map((hh)=>price+=Number(hh.price))

    const delItem=(e)=>{
     groceries[e].isPurchased=true
    }

    return (
        <div className='grocery-li'>
      <h1>My Groceries</h1>
      {groceries.map((hh,value)=>{
          if(hh.isPurchased===false){
              return(
        <div className='grocery-list' key={value} >
         <h4>{hh.item} - {hh.brand}</h4>
         <h4>{hh.quantity}</h4>
         <h4>{hh.price}$</h4>
         <button onClick={(e)=>delItem(value)} >Purchased</button>
         </div>
              )
          }else{return null}
        })}
      <h2>total Price is : {price}</h2>
    </div>
    )
}
