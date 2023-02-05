import React from 'react'
import {useState} from "react"
import Task from './Task'
// const tasks = [{text:"buy milk",done:true},{text:"do homework",done:true}]
export default function TasksList() {
    const [tasks,setTasks] = useState([{text:"buy milk",done:true},{text:"do homework",done:true}])
    const checkHandler = (taskObj)=>{
        console.log("hi")
        return (()=>{
        console.log(tasks)
        taskObj.done = !taskObj.done
        setTasks([...tasks])
    })}
  return (
    <div>
    
    {tasks.map(task =>  <Task {...task} checkHandler={checkHandler(task)}/>)}
    
    </div>
  )
}
