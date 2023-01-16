import { useState } from 'react';
import Counter from './Counter.js';

//  import './CounterList.css';

function CounterList() {
    
    const [catCounter, setCatCounter] = useState(0)
    const [dogCounter, setDogCounter] = useState(0)
    const addOneCat = ()=> setCatCounter(catCounter+1)
    const addOneDog = ()=> setDogCounter(dogCounter+1)
  return (
    <div className="CounterList">
      <Counter name="cats" number = {catCounter} clickHandler ={addOneCat}/>
      <Counter name="dogs" number = {dogCounter} clickHandler ={addOneDog}/>

      <label><input type="text" id ="newCounter" placeholder="new counter"/>
      <button type="submit" onClick={(e)=> console.log(document.getElementById("newCounter").value)}>add</button></label>
    </div>
  );
}

export default CounterList;
