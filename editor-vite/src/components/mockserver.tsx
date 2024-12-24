
const processCode = async (code: string, language: string, answer: number|string): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const outputCheck = checkSolution({code, language, answer});
                resolve({status: outputCheck.status, output: outputCheck.output });

                } catch (err) {
              reject({ status: 'Error', output: `> Error: ${String(err)}\n` });
            }
        }, 1000);  
    });
};

interface solutionOutput{
    status: string,
    output: string,
}

interface solutionInput{
    code: string, 
    language: string, 
    answer: number|string
}

const checkSolution: (input: solutionInput) => solutionOutput = ({ code, language, answer }) => {

    //здесь должен быть анализатор отдельно по каждому языку
    //сейчас в коде отыскивается только один Print или console.log.  Для большего количества должна быть рекурсивная функция.
    let statusOutput;
    let startPrint = -1;
    let i = 0;
    let newCode = code;
    let step = 0;
    if (language === 'python'){
        startPrint = code.indexOf('print(')
        console.log('startPrint=', startPrint)        
        step = 6;        
    }
    if (language === 'javaScript')
    {
        startPrint = code.indexOf('console.log');
        step = 12;
    }    
    let endPrint;
    if( startPrint >= 0){
        endPrint = code.indexOf(')', startPrint + step);
        newCode = code.substring(0, startPrint - 1)
        newCode = newCode + '\n let x' + i + '=' + code.substring(startPrint+step, endPrint) + '\n x' + i;
        code = code.substring(endPrint + 1);
    } 
        
    let output = eval(newCode);
    
    if (output === answer){
        statusOutput = 'Success';
    } else{
        statusOutput = 'Error';
    }
    

    return {
        status: statusOutput,
        output: output
    }
}

const mockServer = () => {
    const handleRequest = async (req: {
        method: string,
        url: string,
        headers: HeadersInit |undefined,
        body: string
    }) => {
        if (req.method === 'POST' && req.url === '/execute') {
            const { code, language, answer } = JSON.parse(req.body)
            const output = await processCode(code, language, answer);

          return  new Response(JSON.stringify(output), { status: 200, headers: { 'Content-Type': 'application/json' }})
        }

       return new Response('Not found', { status: 404 })

    }

    window.fetch = async (url, options) => {
        return handleRequest({ method: options?.method || 'GET', url: url as string, headers: options?.headers , body: options?.body as string})
    }

}


export default mockServer