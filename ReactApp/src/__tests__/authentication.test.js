import {render, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {getQueriesForElement} from '@testing-library/dom'
import LoginComponent from "../components/LoginComponent";

afterEach(cleanup)

it("renders login" , () =>{
    /*const div = document.createElement("div");
    ReactDOM.render(<LoginComponent />,div);*/

    const {getByText, getByLabelText, getByTestId} = render(<LoginComponent />)
    //ReactDOM.unmountComponentAtNode(div);
    getByTestId("usernameLogin");
    getByTestId("passwordLogin");
    getByTestId("buttonLogin");
})

it("addding login info", () => {

    const {getByText, getByLabelText, getByTestId} = render(<LoginComponent />)

    const usernameInput = getByTestId("usernameLogin");
    const passwordInput = getByTestId("passwordLogin");
    const loginButton = getByTestId("buttonLogin");
})