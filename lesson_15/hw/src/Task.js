import React from 'react'
import { useState } from 'react';

export default function Task(props) {
  return (
    <div>{props.text}
    <input type ="checkbox" onChange={props.checkHandler} checked = {props.done}/>
    </div>
  )
}
