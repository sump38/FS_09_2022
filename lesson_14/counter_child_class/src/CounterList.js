// import './CounterList.css';
import Counter from './Counter';
import {useState} from 'react';
function CounterList() {
    const [counterArray, setCounterArray] = useState([{item:"dogs",counterValue:0},{item:"cats",counterValue:0}]);
    const clickHandler =(num)=>{
        counterArray[num].counterValue++;
        setCounterArray([...counterArray])// חייבים להעביר אראי חדש (משוכפל) כדי שהרפרנס יהיה שונה וריאקט ידע שמשהו השתנה
     }
     const clickHandlerAddItem = ()=>{
        const newItem = document.getElementById("addCounter").value;
        const newObject = {item:newItem,counterValue:0}
        counterArray.push(newObject);
        document.getElementById("addCounter").value="";
        setCounterArray([...counterArray])
     }
  return (
    <div className="CounterList">
  {counterArray.map((counterObj,i)=><Counter key={i} item={counterObj.item} number={counterObj.counterValue} clickHandler={
    ()=>{
        clickHandler(i)
    }
  } />)}
    <input type="text" className="addCounter" id="addCounter" placeholder="add item to count"></input>
    <button onClick={clickHandlerAddItem}>press to add</button>
    </div>
  );
}
export default CounterList;
//Counter("dogs",counterValueDogs,clickHandlerDogs)
//Counter("cats",counterValueCats,clickHandlerCats)
