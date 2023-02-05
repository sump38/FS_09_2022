import React from 'react'
import { useState } from 'react';

export default function Task(props) {
    
  return (
    <div>  {props.text} 
    <input type="checkbox" id="scales" name="scales" checked={props.isDone} onChange = {props.changeHandler}></input>
    
    </div>
  )
}
