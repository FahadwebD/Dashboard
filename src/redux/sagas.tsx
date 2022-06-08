import axios from "axios";
import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest , fork } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess , searchTodoSuccess, searchUserError } from "./actions";
import { FETCH_TODO_REQUEST , SEARCH_TODO_REQUEST} from "./actionTypes";

import { ITodo } from "./types";

const getTodos = () =>
  axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");


// const searchTodos = () =>
// axios.put(`https://jsonplaceholder.typicode.com/todos?q=${query}`);


/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() : SagaIterator{
  try {
    const response = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}



// function* onSearchTodoStartAsync({payload}) {
//   try {
//     const response = yield call(searchTodos, query);
//     if (response.status === 200) {
//       yield put(searchTodoSuccess(response.data));
//     }
//   } catch (error) {
//     yield put(searchUserError(error));
//   }

//   }


// export function* onSearchData() {
//     yield takeLatest(SEARCH_TODO_REQUEST, onSearchTodoStartAsync);
//   }
  export function* todosData() {
    yield takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga);
  }
  const allData = [
    fork(todosData),
    // fork(onSearchData),
   
  ];
/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([...allData]);
}

export default todoSaga;