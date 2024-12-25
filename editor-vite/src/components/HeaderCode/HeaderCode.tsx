import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { languageChange } from '../../redux/TaskSlice';
/*
interface HeaderCodeProps{
    handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    language: string;
    handleRunCode: () => void;
    isLoading: boolean
}*/
function HeaderCode(){
    const language = useAppSelector(state => state.tasks.language)
    //const isLoading = useAppSelector(state => state?.isLoading)
    const dispatch = useAppDispatch();


    /* <div className="col-6 d-flex justify-content-end">            
                <button className='btn btn-primary'onClick={handleRunCode} disabled={isLoading}>
                    {isLoading ? 'Process...' : 'Run'}
                </button>
            </div>
             */

    return  <div className="editor-toolbar">
        <div className="row bg-gray p-3  rounded-top-2">
            <div className="col-6">
                <select className='form-select' value={language} onChange={(e) => dispatch(languageChange(e.target.value))}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
        
            </div>
           
        </div>
    </div>
}
export { HeaderCode }