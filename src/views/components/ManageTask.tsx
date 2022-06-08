import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const ManageTask = () => {
    const eye = <FontAwesomeIcon icon={faEye} />
    const pen = <FontAwesomeIcon icon={faPen} />
    const remove = <FontAwesomeIcon icon={faTrash} />

    
  return (
    <div>
         <div>
        <h1>Manage Task</h1>

<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><Link to='/updateTasks' style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</Link><button  style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
    <td style={{display:'flex' ,justifyContent:'space-evenly' }}><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{eye}</button><button style={{ background:'none', border:'none',  marginRight:'10px'}}>{pen}</button><button style={{ background:'none', border:'none'}}>{remove}</button></td>
  </tr>
</table>

    </div>
    </div>
  )
}
