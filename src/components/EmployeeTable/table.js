import React from 'react';
import './style.css';


const EmployeeTable = (props) => {
  console.log(props.employees)
  return (
    <>
      
        {props.employees.map(employee => (
          <ul>
            <div className="card">
            <li className="list-group-item" >
              {employee.email}
              <div className="img-container"></div>
              <img alt={employee.name} className="img-fluid" src={employee.picture.large} />
              {employee.name.first}
              {employee.name.last}
            </li>
            <span className="remove" onClick={() => props.handleRemove(props.id)}>X</span>
            </div>
          </ul>
        ))}
    </>
  )
}
export default EmployeeTable;