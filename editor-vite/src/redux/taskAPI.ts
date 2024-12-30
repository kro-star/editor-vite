
export interface RunCodeResult {
        status: "success" | "error";
        result: string;
      }


export const fetchRunCode = async (
  code: string,
  language: string,
  answer: string
): Promise<RunCodeResult> => {
  try {
      //const response = await axios.post('/execute', body, { headers });
      const response = await fetch('/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },body: JSON.stringify({ code, language, answer }),
      });    
      if (response.ok) {
        const data = await response.json();
        let resultString = '';
        if(data)
        {
            resultString = data.output
        }
         else
             {
             resultString = 'No output'
             }
         return {
         result: resultString,
         status: data.status,
         };
                 
          
      } else {
        return({
          result: `Error: ${response.status} ${response.statusText}\n`,
          status: 'error'
        });
      }
    
  } catch (error: any) {
      return({
          result: `Error: ${error.message}\n`,
          status: 'error'
        });
    } 
          
      };