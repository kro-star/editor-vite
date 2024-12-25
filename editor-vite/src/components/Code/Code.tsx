import { useEffect} from "react";
import { HeaderCode } from "../HeaderCode/HeaderCode"; 
import { CodeEditor } from "../CodeEditor/CodeEditor";
import mockServer from "../mockserver";
/*
interface codeProps{
  language: string;
  answer: string | number;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>)=> void;
  isLoading: boolean;
  handleRunCode: () => void;
  code?: string;
  onChange: (value: string) => void;

}
*/
function Code() {
      
    useEffect(() => {
        mockServer();
    }, []);

    
    return <div className="row pt-3  ">
        <div className="col-12">
            <HeaderCode />
        </div>
        <div className="col-12 h-100 p-0">
            
            <div>
              <CodeEditor  />
            </div>
        </div>
    </div>
}
export { Code }