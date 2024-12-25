//import { Action } from 'redux';

export type TaskActionTypes =
  | "CHANGE_NUMBER_TASK"
  | "CODE_CHANGE"
  | "SET_OUTPUT"
  | "SET_LANGUAGE"
  | "SET_LOADING"
  | "SET_TASK_TEXT";

/*
export default interface IAction<T> extends Action<string> {
    type: TaskActionTypes;
    payload?: T;
    error?: boolean;
    meta?: any;
}
*/
export type TaskAction = 
 { 
  numberTask: number ,
 text: string,
 isLoading: boolean,
 language: string,
 newCode: string ,
 output: string 
}

export type TaskActionType = {
    type: TaskActionTypes, 
    payload?: TaskAction,
}

export enum ActionType { 
  CHANGE_NUMBER_TASK = "CHANGE_NUMBER_TASK",
  CODE_CHANGE = "CODE_CHANGE",
  SET_OUTPUT = "SET_OUTPUT",
  SET_LANGUAGE = "SET_LANGUAGE",
  SET_LOADING = "SET_LOADING",
  SET_TASK_TEXT = "SET_TASK_TEXT",
  SET_INITIAL_STATE = "SET_INITIAL_STATE",
}

interface actionChangeNumberTask {
    type: ActionType.CHANGE_NUMBER_TASK;
    payload: number,
}

interface actionCodeChange {
  type: ActionType.CODE_CHANGE;
  payload: string,
}

interface actionSetOutput {
  type: ActionType.SET_OUTPUT;
  payload: string,
}

interface actionSetLoading {
    type: ActionType.SET_LOADING;
    payload: boolean;
}

interface actionSetLanguage {
  type: ActionType.SET_LANGUAGE;
  payload: string,
}

interface actionSetTaskText {
    type: ActionType.SET_TASK_TEXT;
    payload: string;
}

interface actionSetInitialState {
  type: ActionType.SET_INITIAL_STATE;
}



export type Action = actionChangeNumberTask | actionCodeChange | actionSetInitialState | actionSetLanguage | actionSetLoading | actionSetOutput | actionSetTaskText