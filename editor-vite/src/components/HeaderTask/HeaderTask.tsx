
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import { taskChange} from "../../redux/TaskSlice"


function HeaderTask() {
     const tasks = useAppSelector(state => state.tasks.tasks )
      const numberTask = useAppSelector(state => state.tasks.numberTask)
      const dispatch = useAppDispatch()

    return <div className="row bg-gray rounded-top-2">
        <div className="col-12 p-3">
            <div className="col-6">
                <select className='form-select' value={numberTask} onChange={(e) => dispatch(taskChange(+e.target.value))}>
                    {tasks && tasks.map((el) => <option key = {el.id} value={el.id}>{el.name}</option>)}
                </select>
        
            </div>
        </div>
    </div>
}

export { HeaderTask }