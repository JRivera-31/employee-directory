import React, { Component } from 'react';
import employees from "./employee.json"
import AppBar from "./components/Header"
import Table from "./components/Table"

class App extends Component {
  state = {
    employees
  }


  render() {
    return(
      <div>
        <AppBar />,
        {this.state.employees.map(employee => {
          return < Table height="100vh"
            id={employee.results.id.name}
            firstName={employee.results.name.first}
            lastName={employee.results.name.last}
            location={employee.results.location.country}
            phone={employee.results.phone}
            email={employee.results.email}/>
        })}
      </div>
    );
  }
  
}

export default App;
