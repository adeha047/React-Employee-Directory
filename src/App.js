import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/input.js';
import API from './utils/API.js'
import EmployeeTable from './components/EmployeeTable/table.js';
import Title from './components/Title/title.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: []
    };
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
  handleRemove = id => {
    // console.log(this.state);
    this.setState({
      employees: this.state.employees.filter(employee => employee.id !== id)
    });
  }

  handleSort = (key, asc) => {
    // copy
    let employeeSorted = [...this.state.employees];

    // sort by key and asc
    employeeSorted.sort( (a, b) => {
      return a[key] > b[key] ? asc * 1 : asc * -1;
    });

    // set the state
    this.setState({ employees: employeeSorted });
  }
  

  render() {
    return (
      
      <div> 
        
        <Title>Employee Directory</Title>
        {/* {this.state.employees ? ( */}

          <button onClick={() => this.handleSort("name", 1)}>Push for sort name</button>
        <button onClick={() => this.handleSort("name", -1)}>Push for sort name reverse</button>

          <div> <Searchbar 
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          
          />
          <EmployeeTable 
          key={this.state.employees.id}
          employees={this.state.employees} 
          handleRemove={this.handleRemove}
        
          // {...employees}
          />
          </div>

      </div>

    )
  }

}

export default App;
