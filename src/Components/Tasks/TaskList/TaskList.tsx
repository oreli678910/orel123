import axios from "axios";
import { useEffect, useState } from "react";
import { TaskModel } from "../../../Models/TaskModel";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

function TaskList(): JSX.Element {
    const url = "http://localhost:8080/api/tasks";
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    
    //Mounting - componentDidMount
    useEffect(() => {
       axios.get<TaskModel[]>(url)
       .then(res=>setTasks(res.data))
       .catch(err =>console.log('Oopppsy')); 
    },[])
    return (
        <div className="TaskList">
			<h1> Task List</h1>
        <div className="displayList">
      {
               tasks.map(t => 
                <TaskCard key={'task '+t.id} task={t}/>
                // <p key={'task' + t.id}>
                // {t.id},{t.title},{t.description},{t.group},{t.when.toString()}
               // </p>) 
           )
      }
      </div>
    </div>
    );
}

export default TaskList;
