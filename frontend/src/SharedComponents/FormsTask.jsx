import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"


const FormsTask = () => {

    const navigate = useNavigate();
    const [task, setTask] = useState({
        taskName: "",
        taskDescription: "",
        taskStartDate: "",
        taskEndDate: ""
    })

    useEffect(() => {
        let startDate = new Date("2024-10-13");
        let EndDate = new Date("2024-10-15")
        if (id) {
           let newTask = {
            taskName: "task1",
            taskDescription: "task1description",
            taskStartDate:startDate,
            taskEndDate: EndDate
           }

           setTask(newTask);
        }
    },[])
    const { id } = useParams()


    const handleCancel = ()=>{

        navigate('/')
        
    }

    const handleChange = (e,fieldName)=>{
        
        setTask(...task,task[fieldName] = e.target.value)

    }

    const handleSubmit = () =>{
        if(id){
            //logic of edit
        }
        else{
            //logic og create
        }
    }

    return (
        <>
            <h1>{id ? "Edit Task" : "Create Task"}</h1>
            <div className="form-fields">
                <label>Task Name</label>
                <input name="taskName" type="text" value={task?.taskName} onChange={(e)=> handleChange(e,"taskName")}/>
            </div>
            <div className="form-fields">
                <label>Task Description</label>
                <input name="taskdescription" type="text" value={task?.taskDescription} onChange={(e)=> handleChange(e,"taskDescription")}/>

            </div>
            <div className="form-fields">
                <label>Task Start Date</label>
                <input name="tasksdate" type="date" value={task?.taskStartDate} onChange={(e)=> handleChange(e,"taskStartDate")}/>
            </div>
            <div className="form-fields">
                <label>Task Enddate</label>
                <input name="taskdescription" type="date" value={task.taskEndDate} onChange={(e)=> handleChange(e,"taskEndDate")}/>
            </div>
            <div>
                <button onClick={handleCancel}>Cancel</button>
                <buttton onClick={handleSubmit}>Submit</buttton>
            </div>
        </>
    )



}


export default FormsTask