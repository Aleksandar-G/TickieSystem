import {render, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import HomeTicket from '../components/HomeTicket';

const ticket = 
{
    
    id: "1",
    duedate : "20.12.2020",
    description : "mockdata",
    difficulty : "Junior",
    priority : "High"
    
};


afterEach(cleanup);

/*test('should render the ticket with the test data', () => {
    

    const {getByText, getByLabelText, getByTestId} = render(<HomeTicket ticket={ticket}></HomeTicket>)

    getByText("DueDate: 20.12.2020");
    getByText("PriorityLevel: High");
    getByText("DifficultyLevel: Junior");
    getByText("mockdata"); 
    
})*/
