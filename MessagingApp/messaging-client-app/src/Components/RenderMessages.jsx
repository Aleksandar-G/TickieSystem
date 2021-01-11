import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class RenderMessages extends Component {

    constructor() {
        super();
    
        this.state = {
          messages: []
        };
      }

      componentDidMount(){
      }

    render() {
            let mess = [];
            if(this.props.messages.length !== 0){
                for (let i = 0; i < this.props.messages.length-1; i++) {
                    const element = this.props.messages[i];
                    mess.push( <Grid item xs={12}>
                        <Paper elevation={1}>{element.sender}: {element.message}</Paper>
                        </Grid>)
                }            
            } 
            return mess;
    }
}
