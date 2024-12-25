import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TasksState } from "./TaskReducer";


  
const initialState: TasksState = {
    isLoading: false,
    consoleOutput: '',
    language: 'javaScript',
    code: `//Введите сюда код`,
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
        loadingTask: (state) => {
            state.numberTask = 0,
            state.answer = state.tasks[0].answer
            state.textTask = state.tasks[0].description
        },
    },
  })
  
  


  export const {loadingTask, textTaskChange, codeChange, taskChange, languageChange  } = taskSlice.actions
  
  export default taskSlice.reducer
  
  export const TaskSelector = (state: { taskStore: TasksState }) =>
    state.taskStore