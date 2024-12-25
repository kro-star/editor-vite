import { HeaderTask } from "../HeaderTask/HeaderTask";
import { TextTask } from "../TextTask/TextTask";


function Task(){
    return <div className="row h-100 pt-3 pe-lg-3">
        <div className="col-12 h-100  bg-white"> 
            <HeaderTask  />
            <TextTask />
        </div>
    </div>
}
export { Task }