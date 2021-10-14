
import { useState } from 'react';
import './App.css';
import groceries from './groceries-data';
import Grocery from './components/grocery';


function App() {
  return(
   <Grocery groceries={groceries}/>
  )

}

export default App;
