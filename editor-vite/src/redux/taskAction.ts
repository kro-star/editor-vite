import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../TypeActions';
import { useSelector } from 'react-redux';
import { TaskSelector } from './TaskSlice';


export const runCode = () => {
    
      const { code, language, answer } = useSelector(TaskSelector) 

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_LOADING,
            payload: true,
        });
        dispatch({
            type: ActionType.SET_OUTPUT,
            payload: 'Executing...\n' ,
        });
        try {
            const headers = { 
                'Content-Type': 'application/json',
            };
            const body = { body: JSON.stringify({ code, language, answer }) }
            const { data } = await axios.post('/execute', { body } ,{ headers })

            if (data.ok) {                
                const result = await data.json();
                dispatch({
                    type: ActionType.SET_OUTPUT,
                    payload: result.output + '\n' + result.status,  
                });
            } else {
                dispatch({
                    type: ActionType.SET_OUTPUT,
                    payload: `Error: ${data.status} ${data.statusText}\n`
                });
            }
            
            } catch( error: any) {
                dispatch({
                    type: ActionType.SET_OUTPUT,
                    payload: `Error: ${error.message}\n`
                });

            } finally {                
                dispatch({
                    type: ActionType.SET_LOADING,
                    payload: false,  
                });
            }
    }
} 