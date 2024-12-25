import { HeaderResult } from "../HeaderResult/HeaderResult";
import { TextResult } from "../TextResult/TextResult";
/*
interface resultProps{
    consoleOutput: string;
}
*/
function Result() {
    return <div className="row pt-3">
        <div className="col-12 bg-gray rounded-top-2">
            <HeaderResult />
        </div>
        <div className="col-12 h-100 bg-white border-gray">
            <TextResult />
        </div>
    </div>
    
}

export { Result }