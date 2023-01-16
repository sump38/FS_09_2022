import React,{useState} from "react"

// import './Counter.css';

function Counter(props) {
    const [counter,setCounter] = useState(0)
  return (
    <div className="Counter">
      {props.name}
      <button onClick ={props.clickHandler}>{props.number}</button>
    </div>
  );
}

export default Counter;
