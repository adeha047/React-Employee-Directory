import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Searchbar = () => {
    return (
        <>
        <Form>
            <Form.Control placeholder="Enter Emplyoyee Name" />
        </Form>
        {/* <button className="btn btn-primary" onClick={this.ComponentDidMount}>
        Submit
      </button> */}
      <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
      </>
   
        
         

    )
};

export default Searchbar;
