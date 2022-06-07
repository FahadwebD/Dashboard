import React from 'react'
import addTaskPic from '../../../assets/images/manager-completing-tasks-time-vector-illustration_92753-1226.webp'
import '../../../style/style.css'
export const AddTask = () => {
  return (
    <div>
       <section className="wrapper">
        <div className="container">
            <div className="img__container">
            <img src={addTaskPic} alt="salad" className="img"/> 
        </div>   
            <div className="content">
                <h2 className="subtitle">Add Task</h2>
                
                <input type="text" className="mail" placeholder="task detail" name="mail" required />
                <input type="submit" value="Add" className="subscribe"/>
                
            </div>
        </div>
    </section>
    </div>
  )
}
