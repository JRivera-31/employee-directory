import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Employee Name</strong></TableCell> 
            <TableCell align="right"><LocationCityIcon/> <strong>Location</strong></TableCell>
            <TableCell align="right"><ContactsIcon /> <strong>Phone Number</strong></TableCell>
            <TableCell align="right"><EmailIcon /><strong>Email</strong></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}