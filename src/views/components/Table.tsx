import React ,{ useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {

  getTodosSelector,

} from "../../redux/selector";
import { fetchTodoRequest } from "../../redux/actions";


import '../../style/style.css'

import inComplete from '../../assets/images/Notcompleted.png'
export const Table = () => {


  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);
  

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div>
        <h1>All Task</h1>
 

 <button>Completed</button>
 <table id="customers">
  <tr>
    <th>Userid</th>
    <th>Id</th>
    <th>Task</th>
    <th>Status</th>
    
  </tr>
  {todos.map((item, i) => {
        return <tr key={i} >
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed === true?'yes':'no'}</td>
            
        </tr>;
        })
    }
</table>

    </div>
  )
}
