// import './Counter.css';

function  Counter(props) {
    console.log(props);
  return (
    <div className="Counter">
    <h2>{props.item}</h2>
      <h2>{props.number}</h2>
      <button onClick ={props.handler}> press to add one</button>
      
    </div>
  );
}

export default Counter;
