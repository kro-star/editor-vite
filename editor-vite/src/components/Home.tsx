import React, {useState, useEffect} from "react";
import { Task } from "./Task/Task";
import { Code } from "./Code/Code";
import { Result } from "./Result/Result";

function Home (){
      
      const [isLoading, setIsLoading] = useState(false);
      const [consoleOutput, setConsoleOutput] = useState('');
      const [language,setLanguage] = useState('javaScript');
      const [code, setCode] = useState(`//Введите сюда код`);
      const [numberTask, setNumberTask] = useState(0);
    
      const tasks = [
        {
          id: 0,
          name: 'Задание 1',
          description: 'Выведи на экран текст: Hello, world!',
          answer: 'Hello, world!',
        },
        {
          id: 1,
          name: 'Задание 2',
          description: 'Есть 2 строки "abc" и "def". \n\r Выведи на экран строку "abcdef" ',
          answer: 'abcdef'
        }
      ]
    
    
      const [answer,setAnswer] = useState<number | string>(tasks[0].answer);
      const [textTask, setTextTask] = useState(tasks[0].description);
    
      const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
      };
    
      const handleTaskChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberTask(+e.target.value);
        setAnswer(tasks[+e.target.value].answer);
      };
    
      
      const handleCodeChange = (newCode: string) => {
        setCode(newCode);
      };
    
      const handleTextTaskChange = (newNumberTask : number) => {
        setTextTask(tasks[newNumberTask].description);
      }
    
      useEffect(() => {
        handleTextTaskChange(numberTask);
    
      }, [numberTask])
    
      const handleRunCode = async () => {
        setIsLoading(true);
        setConsoleOutput('Executing...\n');
        try {
          const response = await fetch('/execute', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, language, answer }),
          });
    
          if (response.ok) {
            const result = await response.json();
            setConsoleOutput(result.output + '\n' + result.status);
          } else {
            setConsoleOutput(`Error: ${response.status} ${response.statusText}\n`);
          }
        } catch (error: any) {
            setConsoleOutput(`Error: ${error.message}\n`)
        } finally {
          setIsLoading(false);
        }
      };
    


    return   <main className='row h-100'>
        
    <div className='col-12  col-lg-4  ' >
      <Task numberTask={numberTask} handleTaskChange={handleTaskChange} textTask={textTask} tasks={tasks}/>  

    </div>
    <div className='col-12  col-lg-8'>
      <Code language={language} answer={answer} handleLanguageChange={handleLanguageChange} handleRunCode={handleRunCode} isLoading={isLoading} code={code} onChange={handleCodeChange}/>  
      <Result consoleOutput={consoleOutput}/>
    </div>

  

</main>
}

export { Home }