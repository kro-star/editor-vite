import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

/*
interface textResultProps{
    consoleOutput: string;
}
*/
function TextResult(){
  const consoleOutput = useAppSelector(store => store.tasks.consoleOutput)

  const [heightResultText, setHeightResultText] = useState('100px');
  
  useEffect(() => {
    const elTextTask = document.querySelector('.task-text') as HTMLElement | null;

    if (elTextTask) {
      setHeightResultText( (elTextTask.offsetHeight  / 3 - 56 - 16)  + 'px' );
    } else {
        setHeightResultText('100px'); 
    }
  }, [])
    

    return <div className="row">
        <div className="col-12 h-100">
            
          <div className="code-console overflow-y-auto" style={{height: `${heightResultText}`}}>
              <pre>{consoleOutput}</pre>
          </div>
        </div>
    </div>
}

export{ TextResult }