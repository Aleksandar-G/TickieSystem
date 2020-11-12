import { Redirect } from 'react-router-dom'
import React from 'react';
import AuthenticationService from './AuthenticationService';

class RoutingService {
    redirectBackTohome(){
       window.location.replace("/");
        console.log("asdasd");
    }
}
export default new RoutingService()