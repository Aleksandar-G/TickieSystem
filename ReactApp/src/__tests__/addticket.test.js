import {render, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import AddTicket from '../components/AddTicket';

afterEach(cleanup);

test('should render correctly', () => {
    
    const {getByText, getByLabelText, getByTestId} = render(<AddTicket />)

    getByText("Add New Ticket");
    getByText("Difficulty");
    getByText("Priority");
    getByText("Description");
})
