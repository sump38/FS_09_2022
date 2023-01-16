import {useState} from "react"
import './App.css';
const boomReturn = (num)=>{
  if (num%7===0){
    return "boom"
  }
  return num
}
function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
    <h1>{boomReturn(counter)}</h1>
    <button onClick = {
    ()=>{
      // counter++;
      setCounter(counter+1) 
    console.log(counter)
    }  
    }>press me!</button>
    </div>
  );
}
export default App;
