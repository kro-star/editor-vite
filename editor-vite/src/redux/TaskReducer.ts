import { Action, ActionType } from "../TypeActions"

interface TaskObject{
    id: number,
    name: string,
    description: string,
    answer: string
}

export interface TasksState {
    isLoading: boolean,
    consoleOutput: string,
    language: string,
    code: string,
    numberTask: number,
    tasks: Array<TaskObject>,
    answer: string,
    textTask: string,

}


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

export default function TaskReducer(state = initialState, action: Action): TasksState | undefined {
    switch (action.type){
        case ActionType.CHANGE_NUMBER_TASK:
                return {
                  ...state,
                  numberTask: action.payload,
                  answer: state.tasks[action.payload].answer,
                };
            

        case ActionType.CODE_CHANGE:
            return {
                ...state,
              code: action.payload
            }
      case ActionType.SET_OUTPUT:
        return {
          ...state,
            consoleOutput: action.payload,
        };
      case ActionType.SET_LANGUAGE:
          return {
              ...state,
              language: action.payload,
          };
      case ActionType.SET_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };
      case ActionType.SET_TASK_TEXT:
          return {
            ...state,
            textTask: action.payload,
          };
            
      default:
        return state;
    }
}