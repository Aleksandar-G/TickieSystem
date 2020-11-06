import React from 'react'
import { Redirect, Route,  useHistory,
    useLocation } from 'react-router-dom'
import AuthenticationService from '../Service/AuthenticationService'

export default function SecuredRoute({ children, ...rest }) {
    return (
        /*<Route path={props.path} render ={data=>AuthenticationService.isUserLoggedIn()?(<props.component {...data}></props.component>):(<Redirect to ={{pathname:'/login'}}></Redirect>)}>
            
        </Route>*/
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
