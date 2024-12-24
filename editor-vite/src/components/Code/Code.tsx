import React, { useEffect} from "react";
import { HeaderCode } from "../HeaderCode/HeaderCode"; 
import { CodeEditor } from "../CodeEditor/CodeEditor";
import mockServer from "../mockserver";

interface codeProps{
  language: string;
  answer: string | number;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>)=> void;
  isLoading: boolean;
  handleRunCode: () => void;
  code?: string;
  onChange: (value: string) => void;

}

function Code({language, handleLanguageChange, isLoading, handleRunCode, code, onChange}: codeProps) {
      
    useEffect(() => {
        mockServer();
    }, []);

    
    return <div className="row pt-3  ">
        <div className="col-12">
            <HeaderCode handleLanguageChange={handleLanguageChange} isLoading={isLoading} language={language} handleRunCode={handleRunCode}/>
        </div>
        <div className="col-12 h-100 p-0">
            
            <div>
              <CodeEditor initialCode={code} onChange={onChange} language={language} code={code} />
            </div>
        </div>
    </div>
}
export { Code }