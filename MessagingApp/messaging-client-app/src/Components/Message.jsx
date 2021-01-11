import React,{useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Message(props) {




const work = () =>{
    console.log("test"+ props.messages);
    debugger;
    /*let mess = [];
    for (let i = 0; i < props.message.length; i++) {
        const element = props.message[i];
        mess.push( <Grid item xs={12}>
            <Paper>message: {element.message} from: {element.sender}</Paper>
            </Grid>)
    }

    return mess;*/
}

useEffect(() => {
    work();
}, [])

    return (
        <div>
        </div>
    )
}
