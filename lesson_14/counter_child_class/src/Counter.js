//import './Counter.css';


function Counter(props) {

  return (
    <div className="Counter">
      <h2>{props.item}</h2>
      <h2>{props.number}</h2>
      <button onClick={props.clickHandler}
    >add one</button>
    </div>
  );
}

export default Counter;
