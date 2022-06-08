import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_FAILURE,
    FETCH_TODO_SUCCESS,
    SEARCH_TODO_REQUEST,
    SEARCH_TODO_FAILURE,
    SEARCH_TODO_SUCCESS,
  } from "./actionTypes";





  import {
    FetchTodoRequest,
    FetchTodoSuccess,
    FetchTodoSuccessPayload,
    FetchTodoFailure,
    FetchTodoFailurePayload,
    SearchTodoSuccessPayload,
    SearchTodoSuccess ,
  
  } from "./types";
  

  export type ActionTypes  =

    | { type: typeof SEARCH_TODO_REQUEST; payload: string };




  export const fetchTodoRequest = (): FetchTodoRequest => ({
    type: FETCH_TODO_REQUEST,
  });
  
  export const fetchTodoSuccess = (
    payload: FetchTodoSuccessPayload
  ): FetchTodoSuccess => ({
    type: FETCH_TODO_SUCCESS,
    payload,
  });
  
  export const fetchTodoFailure = (
    payload: FetchTodoFailurePayload
  ): FetchTodoFailure => ({
    type: FETCH_TODO_FAILURE,
    payload,
  });






  export const SearchTodoQueryRequest = (text: string): ActionTypes => ({
    type: SEARCH_TODO_REQUEST,
    payload: text,
  });

  // export const searchUserStart = (query: any) => ({
  //   type: SEARCH_TODO_REQUEST,
  //   payload: query,
  // });
  


  export const searchTodoSuccess = (
    payload: SearchTodoSuccessPayload
  ): SearchTodoSuccess => ({
    type: SEARCH_TODO_SUCCESS,
    payload,
  });


//  export const searchTodoFailure = (
//     payload: SearchTodoFailurePayload
//   ): SearchTodoFailure => ({
//     type: SEARCH_TODO_FAILURE,
//     payload,
//   });

// export const searchUserStart = (query: string) => ({
//   type: SEARCH_TODO_REQUEST,
//   payload: query,
// });


export const searchUserError = (error: string) => ({
  type: SEARCH_TODO_FAILURE,
  payload: error,
});