import React from 'react'
import '../../../style/style.css'
import updateTask from '../../../assets/images/list-completed-tasks-vector-illustration-isometric-design-isolated-white-background-checklist-successfully-completed-red-checkbox-businessman-holding-big-pencil-completion-goal-checkbox_153097-2362.webp'
export const UpdateTask = () => {
  return (
    <div>  <section className="wrapper">
    <div className="container">
        <div className="img__container">
        <img src={updateTask} alt="salad" className="img"/> 
    </div>   
        <div className="content">
            <h2 className="subtitle">Add Task</h2>
            
            <input type="text" className="mail" placeholder="task detail" name="mail" required />
            <input type="submit" value="Update" className="subscribe"/>
            
        </div>
    </div>
</section></div>
  )
}
