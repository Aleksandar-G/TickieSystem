import axios from 'axios';
import React, { Component } from 'react';
import AuthenticationService from '../Service/AuthenticationService';
import '../styles/addTicket.css';
import instance from '../Service/AxiosService';

class AddTicket extends Component {

    constructor(props){
    super(props);

    this.addticket = this.addticket.bind(this);
    }


    addticket(event){

        let duedate = event.target.parentNode.elements.duedate.value;
        let description = event.target.parentNode.elements.description.value;
        let difficulty = event.target.parentNode.elements.difficulty.value;
        let priority = event.target.parentNode.elements.priority.value;

        /*axios.post('http://localhost:8080/db/tickets/add', {
            description: description,
            priority: priority,
            duedate: duedate,
            difficulty: difficulty,
            open : 0
          })*/
          instance.post('http://localhost:8080/db/tickets/add', {
            description: description,
            priority: priority,
            duedate: duedate,
            difficulty: difficulty,
            open : 0
          })

          event.target.parentNode.elements.duedate.value = null;
          event.target.parentNode.elements.description.value = null;
          event.target.parentNode.elements.difficulty.value = null;
          event.target.parentNode.elements.priority.value = null;
         
    }

    

    render() {
        return (
            <div className="addticketform">
                <form>
                    <label for="duedate">DueDate</label>
                    <input className="textInput" type="date" id="duedate" name="duedate"></input>
                    <label for="Priority">Priority</label>
                    <select className="textInput" id="priority" name="priority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <label for="difficulty">Difficulty</label>
                    <select className="textInput" id="difficulty" name="difficulty">
                        <option value="Intern">Intern</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <label for="description">Description</label>
                    <textarea className="textInput descriptionTB" input="text" id="description" name="description"></textarea>

                    <button className="addbtn" type="button" onClick={this.addticket}>Add</button>
                </form>
            </div>

        );
    }
}

export default AddTicket;


/*export default function AddTicket() {

    const addticket  = function(event){

        let duedate = event.target.parentNode.elements.duedate.value;
        let description = event.target.parentNode.elements.description.value;
        let difficulty = event.target.parentNode.elements.difficulty.value;
        let priority = event.target.parentNode.elements.priority.value;
        axios.post( 'localhost:3000/db/tickets/add', {
            description: description,
            priority: priority,
            duedate: duedate,
            difficulty: difficulty

          },{headers: { authorization: AuthenticationService.authtoken }})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
             <form>
                    <label for="duedate">DueDate</label>
                    <input type="date" id="duedate" name="duedate"></input>
                    <label for="Priority">Priority</label>
                    <select id="priority" name="priority">
                        <option value="intern">Intern</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>

                    <label for="difficulty">Difficulty</label>
                    <select id="difficulty" name="difficulty">
                        <option value="intern">Intern</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>
                    <label for="description"></label>
                        <input input="text" id="description" name="description"></input>

                    <input type="submit" value="Submit" onClick={() => addticket()}></input>
                </form>
        </div>
    )
}*/
