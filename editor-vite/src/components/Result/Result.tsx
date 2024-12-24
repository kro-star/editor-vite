import React from "react";
import { HeaderResult } from "../HeaderResult/HeaderResult";
import { TextResult } from "../TextResult/TextResult";

interface resultProps{
    consoleOutput: string;
}

function Result({consoleOutput}: resultProps) {
    return <div className="row pt-3">
        <div className="col-12 bg-gray rounded-top-2">
            <HeaderResult />
        </div>
        <div className="col-12 h-100 bg-white border-gray">
            <TextResult consoleOutput={consoleOutput}/>
        </div>
    </div>
    
}

export { Result }