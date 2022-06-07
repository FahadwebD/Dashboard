import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faClipboardList, faCoffee, faFileCirclePlus, faListCheck, faPaste  } from '@fortawesome/free-solid-svg-icons'
import '../../../style/style.css'

export const Sidebar = () => {

   const element = <FontAwesomeIcon icon={faCoffee} />
   const bar = <FontAwesomeIcon icon={faBarsStaggered} />
   const taskList = <FontAwesomeIcon icon={faListCheck} />
   const listManage = <FontAwesomeIcon icon={faClipboardList}/>
   const manageTask = <FontAwesomeIcon icon={faPaste}/>
   const addTask = <FontAwesomeIcon icon={faFileCirclePlus} />
  return (
    <div className="s-layout__sidebar">
    <a className="s-sidebar__trigger" href="#0">
       <i className="fa fa-bars">{bar}</i> 
    </a>
  
    <nav className="s-sidebar__nav">
    <div style={{textAlign:'center' , marginBottom:'20px'}}>
      <h3 >Tasks</h3>
      </div>
       <ul>
          <li>
             <Link to='/' className="s-sidebar__nav-link" >
             <i style={{margin:'24px 20px'}} className="fa fa-user">{taskList}</i><em>Task List</em>
             </Link>
          </li>
          <li>
             <Link to='/addTask' className="s-sidebar__nav-link" >
             <i style={{margin:'24px 20px'}} className="fa fa-user">{addTask}</i><em>Add Task</em>
             </Link>
          </li>
          <li>
             <Link to='/manageTask' className="s-sidebar__nav-link" >
             <i style={{margin:'24px 20px'}} className="fa fa-user">{manageTask}</i><em>Manage Task</em>
               
             </Link>
          </li>
       </ul>
    </nav>
  </div>
  )
}
