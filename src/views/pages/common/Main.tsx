import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import { AddTask } from '../../components/AddTask';
import { Table } from '../../components/Table';

export const Main = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Table/>} />
        <Route path="/addTask" element={<AddTask/>} />

      </Routes>
     
    </div>
  )
}
