import React, { useContext } from "react";

interface taskObj{
    id: number;
      name: string;
      description: string;
      answer: string;

}

interface HeaderTaskProps{
    numberTask: number;
    handleTaskChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    tasks: taskObj[];

}

function HeaderTask({numberTask = 1, handleTaskChange, tasks}: HeaderTaskProps) {

    //const {state, taskChange} = useContext(TaskContext)

    return <div className="row bg-gray rounded-top-2">
        <div className="col-12 p-3">
            <div className="col-6">
                <select className='form-select' value={numberTask} onChange={()=> {}}>
                    {tasks.map((el, index) => <option key = {el.id} value={el.id}>{el.name}</option>)}
                </select>
        
            </div>
        </div>
    </div>
}

export { HeaderTask }