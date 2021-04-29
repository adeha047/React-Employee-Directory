import React from 'react';


const EmployeeTable = (props) => {
  console.log(props.employees)
  return (
    <>
      <div className="card">
        {props.employees.map(employee => (
          <ul>
            <li className="list-group-item" >
              {employee.email}
              <div className="img-container"></div>
              <img alt={employee.name} className="img-fluid" src={employee.picture.large} />
              {employee.name.first}
              {employee.name.last}
            </li>
            <span className="remove" onClick={() => props.handleRemove(props.id)}>X</span>
          </ul>
        ))}
      </div>
    );
    </>
  )
}


export default EmployeeTable;