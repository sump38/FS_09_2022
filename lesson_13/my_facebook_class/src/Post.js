import React, {useState} from 'react';
import './App.css';
function Post(props) {

  return (
    <>
    
    <h2>{props.text}</h2>
    <button onClick = {props.perPostOnClick}>{props.likes} </button>
    
    </>

    
      )
      }
  
export default Post;
