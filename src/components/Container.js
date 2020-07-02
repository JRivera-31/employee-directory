import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from "./Header"
import Table from "./Table"

export default function SimpleContainer() {
    return (
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="lg">
                <AppBar />,
                    < Table height="100vh"/>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
        </React.Fragment>
  );
}