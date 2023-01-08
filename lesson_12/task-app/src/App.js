import './App.css';
import Task from './Task.js';


const tasks = [{text:"clean room", isDone:false},{text:"buy milk", isDone:false}]

function App() {
  return (
    <div className="App">
          {tasks.map(task=><Task text = "hello gur" likes={35}/>)}
    </div>
  );
}

export default App;
