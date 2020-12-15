import './App.css';
import Header from './components/Header.js'
import Collection from './components/Collection.js'
import { useState } from 'react';

const App=()=> {
  
  const [basketV,setBasketV]=useState(0)
  const addInBasket = () => {
    setBasketV(basketV+1)
  }

  return (
    <div className="App">
      <Header basketV={basketV}/>
      <Collection basketV={basketV} setBasketV={setBasketV} addInBasket={addInBasket}  />
    </div>
  )
}
export default App