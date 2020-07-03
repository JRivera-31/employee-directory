import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import employees from "../employee.json"
import TableBody from "./TableBody";
import TableHead from "./TableHead"

class RenderTable extends Component {
  state = {
    employees,
    firstNames: []
  }

  componentDidMount() {
    const firstNames = this.state.employees.results.map(employee => employee.name.first)

    this.setState({firstNames})
  }

  // sortAscending = () => {
  //   console.log(this.state.firstNames)
  //   const sorted = this.state.firstNames.sort()
  //   console.log(sorted)

  //   this.setState({sorted})
  // }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead />
          {this.state.employees.results.map(employee => {
          return <TableBody
            key={employee.login.uuid}
            firstname={employee.name.first}
            lastname={employee.name.last}
            location={employee.location.country}
            phone={employee.phone}
            email={employee.email} />
        })}
      </Table>
    </TableContainer>
  );
    
  }
}

export default RenderTable