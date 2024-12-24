import { TaskActionType } from "./TypeActions"

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

export default function TaskReducer(state = initialState, action: TaskActionType): TasksState | undefined {
    switch (action.type){
        case 'CHANGE_NUMBER_TASK':
            if ( action.payload !== undefined){
                return {
                  ...state,
                  numberTask: action.payload.numberTask,
                  answer: state.tasks[action.payload.numberTask].answer,
                };
            }
            return {
                ...state
            }

        case 'CODE_CHANGE':
            if ( action.payload !== undefined){
            return {
                ...state,
              code: action.payload.newCode
            }
        }
        return {
            ...state
        }
      case 'SET_OUTPUT':
        if ( action.payload !== undefined){
        return {
          ...state,
            consoleOutput: action.payload.output,
        };
      }
      return {
          ...state
      }
      case 'SET_LANGUAGE':
        if ( action.payload !== undefined){
          return {
              ...state,
              language: action.payload.language,
          };
        }
        return {
            ...state
        }
          case 'SET_LOADING':
            if ( action.payload !== undefined){
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
          }
          return {
              ...state
          }
          case 'SET_TASK_TEXT':
            if ( action.payload !== undefined){
              return {
                ...state,
                textTask: action.payload.text,
              };
            }
            return {
                ...state
            }
      default:
        return state;
    }
}