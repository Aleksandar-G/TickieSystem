import {render, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import NavBar from '../components/NavBar';

afterEach(cleanup);

test('should render correctlly', () => {

    const {getByText, getByLabelText, getByTestId} = render(<NavBar />)

    getByText("Home");
    getByText("Profile");
})
