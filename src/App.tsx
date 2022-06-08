import { TheLayout } from "./views/pages/TheLayout";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./redux/selector";

import { fetchTodoRequest } from "./redux/actions";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div className="App">
      {/* <TheLayout></TheLayout> */}
      <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default App;
