import React from 'react'
import '../../../style/style.css'
import updateTask from '../../../assets/images/update.png'





export const UpdateTask = () => {



  return (
    <div> 
       <section className="wrapper">
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
</section>
</div>
  )
}
