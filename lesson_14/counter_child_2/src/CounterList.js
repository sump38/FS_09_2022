// import './CounterList.css';
import {useState} from "react"
import Counter from './Counter.js'

function CounterList() {

 const [counters,setCounters] = useState([{item:"cats",number:0},{item:"dogs",number:0}])
 counters.map((obj)=>console.log(obj))


  return (
    <div className="CounterList">
    <code>{JSON.stringify(counters)}</code>
    {counters.map(counterObj => {
        return (<Counter {...counterObj} handler={()=>{


        counterObj.number++
        setCounters([...counters])
        

    }
        }
    />)})}
    <input type="text" className="addItem"  id="addItem" placeholder="new item"></input>
      <button onClick ={()=>
        {
            const countersNew = [...counters];
            const item = document.getElementById("addItem").value
            console.log(item)
            countersNew.push({item,number:0});
            setCounters(countersNew)
            document.getElementById("addItem").value=""
        }}>add item
        </button>


        
    </div>
  );
}

export default CounterList;
