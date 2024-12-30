import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { TasksState } from "./TaskReducer";
import { fetchRunCode, RunCodeResult } from "./taskAPI";
import { useAppSelector } from "./hooks";
import { FetchArgs } from "@reduxjs/toolkit/query";


  
const initialState: TasksState = {
    isLoading: false,
    consoleOutput: '',
    language: 'javaScript',
    code: `//Введите сюда код
console.log('Hello, world!')`,
    numberTask: 0,

    tasks: [
      {
        id: 0,
        name: 'Задание 1',
        description: 'Выведи на экран текст: Hello, world!',
        answer: 'Hello, world!',
      },
      {
        id: 1,
        name: 'Задание 2',
        description: 'Есть 2 строки "abc" и "def". \n\r Выведи на экран строку "abcdef" ',
        answer: 'abcdef'
      }
    ],


    answer: '',
    textTask: ''
}

interface FetchArgCode{
  code: string,
  language: string, 
  answer: string
}


export const fetchCode = createAsyncThunk<RunCodeResult, string, { state: {tasks: TasksState} }>('tasks/fetchTask', async (code: string, thunkAPI) => {
  debugger
  const state = thunkAPI.getState();
  console.log('fetchCode');
  
  const response = await fetchRunCode(state.tasks.code, state.tasks.language, state.tasks.answer)
  return response
})
  
  const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        languageChange(state, { payload }: PayloadAction<string>) {
        state.language = payload
      },
        taskChange(state, { payload }: PayloadAction<number>) {
            state.numberTask = payload
            state.answer = state.tasks[payload].answer
          //  state.textTask = state.tasks[payload].description
        },
        codeChange(state, { payload }: PayloadAction<string>){
            state.code = payload
        },
        textTaskChange(state, { payload }: PayloadAction<number> ){
            state.textTask = state.tasks[payload].description
        },
        loadingTask (state) {
            state.numberTask = 0,
            state.answer = state.tasks[0].answer
            state.textTask = state.tasks[0].description
        },
        setLoadingResultCode(state, { payload }: PayloadAction<boolean> ){
          state.isLoading = payload
        },
        setOutput(state, { payload }: PayloadAction<string> ){
          state.consoleOutput = payload
        },
        
        
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCode.pending, (state) => {
           state.isLoading = true;
           state.consoleOutput = 'Executing...\n';6
           
      });
      builder.addCase(fetchCode.fulfilled, (state, action) => {
            state.isLoading = false;
          state.consoleOutput = action.payload.result;
      });
      builder.addCase(fetchCode.rejected, (state, action) => {
            state.isLoading = false;
          state.consoleOutput = action.error.message || 'An error occured';
      });
  }
  })
  
  


  export const {loadingTask, textTaskChange, codeChange, taskChange, languageChange, setLoadingResultCode, setOutput  } = taskSlice.actions
  
  export default taskSlice.reducer
  
  export const TaskSelector = (state: { taskStore: TasksState }) =>
    state.taskStore





  
  