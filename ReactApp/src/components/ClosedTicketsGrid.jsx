import React , {useState} from 'react'
import instance from '../Service/AxiosService';

export default function ClosedTicketsGrid() {

    const [closedTickets, setclosedTickets] = useState([])

    instance.get('http://localhost:8080/db/tickets/closeTicketUser?username='+sessionStorage.getItem("authenticatedUser")).then((res) => {
        console.log(res.data);
    }).catch((err) => console.log(err))


    return (
        <div>
            
        </div>
    )
}
