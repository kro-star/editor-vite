import  {  useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { python } from '@codemirror/lang-python';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { codeChange } from '../../redux/TaskSlice'


/*
interface CodeEditorProps {
  initialCode?: string;
  onChange: (code: string) => void;
  theme?: string;
  language: string;
  code?: string;
  
}
*/
function CodeEditor(){
  const code = useAppSelector(state => state.tasks.code);
  const language = useAppSelector(state => state.tasks.language);
  const dispatch = useAppDispatch();

  const theme = 'dracula';
  const editorRef = useRef<EditorView | null>(null);
  const [heightCodeMirror, setHeightCodeMirror] = useState('500px');
  const handleCodeChange = (value: string) => {
    
    dispatch(codeChange(value));
 };

  useEffect(() => {
    code && dispatch(codeChange(code));
    
  }, [code]);

  useEffect(() =>{
    const elCodeMirror = document.querySelector('.task-text') as HTMLElement | null;
    if (elCodeMirror) {
        setHeightCodeMirror ( (elCodeMirror.offsetHeight * 2 / 3) + 'px');
      } else {
        setHeightCodeMirror('500px'); 
      }
  }, [])

let extensions = [];
  switch (language) {
      case "javascript":
          extensions = [javascript()]
          break
      case "python":
          extensions = [python()]
          break
      default:
          extensions = [javascript()]
  }

  

  return (
    <div className="code-editor-container h-100">
        <CodeMirror
            value={code}
            theme={theme === 'dracula' ? dracula : undefined}
            height={heightCodeMirror}
            extensions={extensions}
            onChange={handleCodeChange}
            onUpdate={(update) => {
                editorRef.current = update.view;
            }}
        />
    </div>
  );
};

export { CodeEditor }