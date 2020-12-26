import React from 'react';
import GridTickets from './GridTickets'
import { Grid } from '@material-ui/core';

function Home() {

    return (
        <div className="main">
            <Grid container spacing={2}>
                <GridTickets />
            </ Grid>
        </div>
    );
}

export default Home;