import {render, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AddTicket from '../components/AddTicket';

afterEach(cleanup);

test('should render correctly', () => {
    
    const {getByText, getByLabelText, getByTestId} = render(<AddTicket />)

    getByText("Add");
    getByText("Difficulty");
    getByText("DueDate")
    getByText("Priority");
    getByText("Description");
})
