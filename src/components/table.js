import React from 'react';
import Table from 'react-bootstrap/Table';

const EmployeeTable = (props) => {
    console.log(props.employees)
    return (
        <>
        <ul className="list-group">
        {props.employees.map(employee => (
          <li className="list-group-item" >
              {employee.email}
              {employee.gender}
          </li>
        ))}
      </ul>
    );
    </>
    )
}

{/* <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      {employee.email}
    </tr>
  </thead>
  <tbody>
    <tr>
      {employee.gender}
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      {employee.name}
    </tr>
  </tbody>
</Table> */}

// email: "carl.madsen@example.com"
// gender: "male"
export default EmployeeTable;