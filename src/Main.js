import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VerticalTabs from "./VerticalTabs";
import ButtonAppBar from "./ButtonAppBar";

export default function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', width: '80vw' }}>
                    <ButtonAppBar/>
                    <VerticalTabs/>
                </Typography>
            </Container>
        </React.Fragment>
    );
}