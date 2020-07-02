import React, { Component } from 'react';
import employees from "./employee.json"
import AppBar from "./components/Header"
import TableBody from "./components/Table"

class App extends Component {
  state = {
    employees
  }


  render() {
    return(
      <div>
        <AppBar />,
        {this.state.employees.results.map(employee => {
          return < TableBody height="100vh"
            id={employee.id.name}
            firstName={employee.name.first}
            lastName={employee.name.last}
            location={employee.location.country}
            phone={employee.phone}
            email={employee.email}/>
        })}
      </div>
    );
  }
  
}

export default App;
