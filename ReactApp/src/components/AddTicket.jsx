import React, { Component } from 'react';
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
        

          instance.post('http://localhost:8080/db/tickets/add', {
            description: description,
            priority: priority,
            duedate: duedate,
            difficulty: difficulty,
            open : 0
          }).catch((err) => {
              alert("Try again!")
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
                    <input className="textInput" type="date" id="duedate" name="duedate" required></input>
                    <label for="Priority">Priority</label>
                    <select className="textInput" id="priority" name="priority" required>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <label for="difficulty">Difficulty</label>
                    <select className="textInput" id="difficulty" name="difficulty" required>
                        <option value="Intern">Intern</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <label for="description">Description</label>
                    <textarea className="textInput descriptionTB" input="text" id="description" name="description" required></textarea>

                    <button className="addbtn" type="button" onClick={this.addticket}>Add</button>
                </form>
            </div>

        );
    }
}

export default AddTicket;
