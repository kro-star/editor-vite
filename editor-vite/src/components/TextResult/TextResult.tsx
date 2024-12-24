import React from "react";
interface textResultProps{
    consoleOutput: string;
}

function TextResult({consoleOutput = ''}: textResultProps){

    
    const elTextTask = document.querySelector('.task-text') as HTMLElement | null;
  let heigthResultText: string;
    if (elTextTask) {
      heigthResultText = (elTextTask.offsetHeight  / 3 - 56 - 16) + 'px';
    } else {
        heigthResultText =  '100px'; 
    }

    return <div className="row">
        <div className="col-12 h-100">
            
          <div className="code-console overflow-y-auto" style={{height: `${heigthResultText}`}}>
              <pre>{consoleOutput}</pre>
          </div>
        </div>
    </div>
}

export{ TextResult }