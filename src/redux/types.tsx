import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    SEARCH_TODO_REQUEST,
    SEARCH_TODO_FAILURE,
    SEARCH_TODO_SUCCESS,
  } from "./actionTypes"

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodoState {
    pending: boolean;
    todos: ITodo[];
    error: string | null;
  }
  









  export interface FetchTodoSuccessPayload {
    todos: ITodo[];
  }
  export interface SearchTodoSuccessPayload {
    todos: ITodo[];
  }
  








  export interface FetchTodoFailurePayload {
    error: string;
  } 
  export interface SearchTodoFailurePayload {
    error: string;
  }



  export interface SearchTodoQueryPayload {
    query: string | null;
  }






  export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
  }
  
  export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
  };
  
  export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
  };






  export interface SearchTodoQueryRequest {
    type: typeof SEARCH_TODO_REQUEST;
    payload: string ;
    
  }
  
  export type SearchTodoSuccess = {
    type: typeof SEARCH_TODO_SUCCESS;
    payload: SearchTodoSuccessPayload;
    
  };
  
  export type SearchTodoFailure = {
    type: typeof SEARCH_TODO_FAILURE;
    payload: SearchTodoFailurePayload;
  };
  
  export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure
    | SearchTodoQueryRequest
    | SearchTodoSuccess
    | SearchTodoFailure