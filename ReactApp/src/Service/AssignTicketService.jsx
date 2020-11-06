import axios from 'axios';

const API_BASE_ADDRESS = "http://localhost:8080/db";

 const AssginTicketService = function(ticketId,username){
      axios.post( API_BASE_ADDRESS+"/tickets/assign", {
          ticketId: ticketId,
          username: username
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  export default AssginTicketService;




