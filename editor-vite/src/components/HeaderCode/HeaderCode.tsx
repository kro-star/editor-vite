import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { languageChange, fetchCode } from '../../redux/TaskSlice';

function HeaderCode(){
    const language = useAppSelector(state => state.tasks.language)
    const isLoading = useAppSelector(state => state.tasks.isLoading)
    const code = useAppSelector(state => state.tasks.code)
    const dispatch = useAppDispatch();

    const handleRunCode = async () => {
        dispatch(fetchCode(code));
      };

    return  <div className="editor-toolbar">
        <div className="row bg-gray p-3  rounded-top-2">
            <div className="col-6">
                <select className='form-select' value={language} onChange={(e) => dispatch(languageChange(e.target.value))}>
                    <option value="javaScript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
        
            </div>
            <div className="col-6 d-flex justify-content-end">            
                <button className='btn btn-primary'onClick={handleRunCode} disabled={isLoading}>
                    {isLoading ? 'Process...' : 'Run'}
                </button>
            </div>

           
        </div>
    </div>
}
export { HeaderCode }