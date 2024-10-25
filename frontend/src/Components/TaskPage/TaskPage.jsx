import React,{useState,useEffect} from "react";
import './Task.css'

const tasks = [{
    id:1,
    taskname:"Task1",
    description:"TestTaask1",
    startDate :"12-08-2024",
    endDate:"15-08-2024"
},
{
    id:2,
    taskname:"Task2",
    description:"TestTaask2",
    startDate :"12-08-2024",
    endDate:"15-08-2024"
}]


const TaskPage =()=>{

    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
        //fetch all task apicall
    })

    return(
        <>
        <h1>Task List</h1>
         <div className="task-cards">
           {tasks.map((item)=>{
             return(
                <div className="card-task" key={item.id}>
                    <p>{`Task Name ${item?.taskname}`}</p>
                    <p>{`Task Description ${item?.description}`}</p>
                    <p>{`Task StartDate ${item?.startDate}`}</p>
                    <p>{`Task EndDate ${item?.endDate}`}</p>
                </div>
             )
           })}
        </div>

        </>
    )
}

export default TaskPage