import React,{useEffect,useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Message(props) {

//<Paper>message: {element.message} from: {element.sender}</Paper>
//let [state, setstate] = useState(0)

const work = () =>{
    console.log("test"+ props.messages);
    if(props.messages.length !== 0){
    let mess = [];
    for (let i = 0; i < props.messages.length-1; i++) {
        const element = props.messages[i];
        mess.push( <Grid item xs={12}>
            <Paper>message: asdasd from: asdasd</Paper>
            </Grid>)
    }

    return mess;
}
}

useEffect(() => {
    work();
}, [props.messages.length])

    return (
       /* if(props.messages.length !== 0){
            let mess = [];
            for (let i = 0; i < props.messages.length-1; i++) {
                const element = props.messages[i];
                mess.push( <Grid item xs={12}>
                    <Paper>message: asdasd from: asdasd</Paper>
                    </Grid>)
            }
        
            return mess;
        }*/
        <div>
        </div>
    );
    }
