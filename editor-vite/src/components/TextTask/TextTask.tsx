
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { textTaskChange } from '../../redux/TaskSlice'

function TextTask() {

    const textTask = useAppSelector(state => state.tasks.textTask)
    const numberTask = useAppSelector(state => state.tasks.numberTask)
    const dispatch = useAppDispatch();

    useEffect(() => {
        numberTask && dispatch(textTaskChange(numberTask))
    },[numberTask])

    return <div className="row overflow-y-auto task-text  border-gray">
        <div className="col-12  ">
            <div className="">
                {textTask} 
            </div>
        </div>
    </div>
}
export { TextTask }