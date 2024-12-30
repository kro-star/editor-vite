import axios from "axios"
import { useAppSelector } from "./hooks";

// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
    return new Promise<{ data: number }>(resolve =>
      setTimeout(() => resolve({ data: amount }), 500),
    )
  }


 /* export const runCode = (code: string, language: string, answer: string) => {
  const dispatch = useAppDispatch();

    return async () => {    
      dispatch(setLoadingResultCode(true));
      dispatch(setOutput('Executing...\n'));
        try {
            const headers = { 
                'Content-Type': 'application/json',
            };
            const body = { body: JSON.stringify({ code, language, answer }) }
            const { data } = await axios.post('/execute', { body } ,{ headers })
  
            if (data.ok) {                
                const result = await data.json();
                dispatch(setOutput(result.output + '\n' + result.status));
            } else {
                dispatch(setOutput(`Error: ${data.status} ${data.statusText}\n`))
            }
            
            } catch( error: any) {
                dispatch(setOutput(`Error: ${error.message}\n`))
  
            } finally {                
                dispatch(setLoadingResultCode(false))
            }
    }
  } */


export interface RunCodeResult {
        status: "success" | "error";
        result: string;
      }
      
      export const fetchRunCode = async (
        code: string,
        language: string,
        answer: string
      ): Promise<RunCodeResult> => {
        console.log('fetchRunCode');
        debugger
        try {
            
            const headers = {
                'Content-Type': 'application/json',
            };
      
            const body = {code, language, answer };
      
            const response = await axios.post('/execute', body, { headers });
            
            const data = response.data;      
      
            if (response.status >= 200 && response.status < 300) {//if (data.ok)
                let resultString = '';
               if(data && data.output && data.status)
               {
                   resultString = data.output + '\n' + data.status
               }
                else if(data){
                    resultString = JSON.stringify(data);
                    }
                    else
                    {
                    resultString = 'No output'
                    }
                return {
                status: "success",
                result: resultString,
                };
            } else {
                return {
                status: "error",
                    result: `Error: ${response.status} ${response.statusText}`,
                };
            }
        } catch (error: any) {
          return {
            status: "error",
            result: `Error: ${error.message}\n`,
          };
        }
      };