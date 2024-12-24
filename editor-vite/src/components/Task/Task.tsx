import React from "react";
import { HeaderTask } from "../HeaderTask/HeaderTask";
import { TextTask } from "../TextTask/TextTask";

interface taskObj{
    id: number;
      name: string;
      description: string;
      answer: string;

}

interface TaskProps{
    textTask: string;
    numberTask: number;
    handleTaskChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    tasks: taskObj[];
}

function Task({textTask, numberTask,  handleTaskChange, tasks} : TaskProps){
    return <div className="row h-100 pt-3 pe-lg-3">
        <div className="col-12 h-100  bg-white"> 
            <HeaderTask  numberTask={numberTask} handleTaskChange={handleTaskChange} tasks={tasks}/>
            <TextTask textTask={textTask}/>
        </div>
    </div>
}
export { Task }