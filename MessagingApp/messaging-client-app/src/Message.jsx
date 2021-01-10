import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Message(props) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper>message: {props.message.message} from: {props.message.sender}</Paper>
            </Grid>
        </Grid>
    )
}
