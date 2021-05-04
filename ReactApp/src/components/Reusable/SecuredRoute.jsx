import React from 'react'
import { Redirect, Route} from 'react-router-dom'
import AuthenticationService from "../../Service/AuthenticationService";

export default function SecuredRoute({ children, ...rest }) {
    return (

              <Route
                {...rest}
                render={({ location }) =>
                  AuthenticationService.isUserLoggedIn() ? (
                    children
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location }
                      }}
                    />
                  )
                }
              />

    )
}
