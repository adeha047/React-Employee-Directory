import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/input.js';
import API from './utils/API.js'
import EmployeeTable from './components/EmployeeTable/table.js';



// function App() {
//   return (
//     <div className="App">
//       <Searchbar />

//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: []
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
}
  handleRemove = id => {
    // console.log(this.state);
    this.setState({
      employees: this.state.employees.filter(employee => employee.id !== id)
    });
  }

  componentDidMount() {
    this.searchUsers();
  }

  searchUsers = () => {
    API.getUsers()
      // .then(res => res.json())
      .then(
        (result) => {
          // console.log(result.data.results)
          this.setState({
            employees: result.data.results
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )

  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    //     return (
    //       <ul>
    //         {employees.map(item => (
    //           <li key={item.id}>
    //             {item.name} {item.price}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }
    // }
    return (
      <div> 
        {this.state.employees ? (
          <div> <Searchbar 
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          
          />
          <EmployeeTable 
          key={this.state.employees.id}
          employees={this.state.employees} 
          handleRemove={this.handleRemove}/> 
          </div>
          

        ): <h1> Loading... </h1>}
        

      </div>
    )
  }

}

export default App;
