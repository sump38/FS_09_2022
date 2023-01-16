import './App.css';
import {useState} from "react";

function Post({text,likes,onC}) {

  return (
    <div className="App">

    {text}
      <button onClick={()=>{onC()}}>{likes}</button>
    </div>
  );
}

export default Post;
