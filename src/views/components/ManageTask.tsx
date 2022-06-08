import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {

  getTodosSelector,

} from "../../redux/selector";
import { fetchTodoRequest } from "../../redux/actions";


import '../../style/style.css'


export const ManageTask = () => {
    const eye = <FontAwesomeIcon icon={faEye} />
    const pen = <FontAwesomeIcon icon={faPen} />
    const remove = <FontAwesomeIcon icon={faTrash} />

    const dispatch = useDispatch();
    const todos = useSelector(getTodosSelector);
    
  
    useEffect(() => {
      dispatch(fetchTodoRequest());
    }, []);
  
  return (
    <div>
         <div>
        <h1>Manage Task</h1>

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
    </div>
  )
}
