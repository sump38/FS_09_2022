import React from 'react'
import {useState} from "react";
import Task from "./Task"

export default function TasksList() {
    const [tasks,setTasks] = useState([{text: "Buy milk", isDone:false},{text: "Homework", isDone:false}])
    const changeHandlerCreator = (task) => {
    const returnFunction  =  // מפעל לפונקציות - יוצר פונקציה שמשנה את האיזדנ של האובייקט  שהועבר לה
    ()=> 
    {
        task.isDone = !task.isDone;
        setTasks([...tasks]);
    };
    return returnFunction
    }
  return (
    <div>
    <code> {JSON.stringify(tasks)}</code>
    {tasks.map((TaskObj) =><Task {...TaskObj} changeHandler ={changeHandlerCreator(TaskObj)}/>)}
    </div>
  )
}
