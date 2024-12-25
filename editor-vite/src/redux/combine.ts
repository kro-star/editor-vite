import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';

const reducers = combineReducers({
tasks: TaskReducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;