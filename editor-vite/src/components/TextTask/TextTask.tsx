interface TextTaskProps{
    textTask: string;
}

function TextTask({textTask}: TextTaskProps) {
    return <div className="row overflow-y-auto task-text  border-gray">
        <div className="col-12  ">
            <div className="">
                {textTask} 
            </div>
        </div>
    </div>
}
export { TextTask }