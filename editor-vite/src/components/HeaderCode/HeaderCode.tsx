import React from "react";

interface HeaderCodeProps{
    handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    language: string;
    handleRunCode: () => void;
    isLoading: boolean
}
function HeaderCode({handleLanguageChange, language , isLoading, handleRunCode}: HeaderCodeProps){
    return  <div className="editor-toolbar">
        <div className="row bg-gray p-3  rounded-top-2">
            <div className="col-6">
                <select className='form-select' value={language} onChange={handleLanguageChange}>
                    <option value="javascript">JavaScript</option>
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