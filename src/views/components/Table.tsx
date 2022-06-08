import React ,{ useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "../../redux/selector";
import { fetchTodoRequest } from "../../redux/actions";


import '../../style/style.css'

import inComplete from '../../assets/images/Notcompleted.png'
export const Table = () => {


  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div>
        <h1>All Task</h1>
 

 <button>Completed</button>
<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Status</th>
    
  </tr>
  {todos.map((item, i) => {
        return <tr key={i} >
            <td>{item.title}</td>
            <td>{item.title}</td>
            <td>{item.title}</td>
            <td>{item.completed === true?'yes':'no'}</td>
            
        </tr>;
        })
    }
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
</table>

    </div>
  )
}
