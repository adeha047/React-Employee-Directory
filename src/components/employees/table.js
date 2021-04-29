import React from 'react';


const EmployeeTable = (props) => {
  console.log(props.employees)
  return (
    <>
      <div className="card">
        {props.employees.map(employee => (
          <ul>
            <li className="list-group-item" >
            <span className="remove" onClick={() => employees.handleRemove(employees.id)}>𝘅</span>
              {employee.email}
              <div className="img-container"></div>
              <img alt={employee.name} className="img-fluid" src={employee.picture.large} />
              {employee.name.first}
              {employee.name.last}
            </li>
          </ul>
        ))}
      </div>
    );
    </>
  )
}

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Address:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span className="remove" onClick={() => props.handleRemove(props.id)}>𝘅</span>
//     </div>
//   );
// }

export default EmployeeTable;