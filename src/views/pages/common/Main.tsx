import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import { AddTask } from '../../components/CRUD/AddTask';
import { UpdateTask } from '../../components/CRUD/UpdateTask';

import { ManageTask } from '../../components/ManageTask';
import { Table } from '../../components/Table';

export const Main = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Table/>} />
        <Route path="/addTask" element={<AddTask/>} />
        <Route path="/manageTask" element={<ManageTask/>} />
        <Route path="/updateTasks" element={<UpdateTask/>} />


      </Routes>
     
    </div>
  )
}
