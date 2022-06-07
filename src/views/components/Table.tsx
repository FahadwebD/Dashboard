import React from 'react'
import '../../style/style.css'
import completedIcon from '../../assets/images/completed.png'
import inComplete from '../../assets/images/Notcompleted.png'
export const Table = () => {
  return (
    <div>
        <h1>All Task</h1>

<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Status</th>
    
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><img src={completedIcon} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
    <td><img src={completedIcon} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td><img src={completedIcon} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
    <td><img src={inComplete} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
    <td><img src={completedIcon} alt=""  style={{width:'20px' , height:'20px'}}/></td>
  </tr>
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
