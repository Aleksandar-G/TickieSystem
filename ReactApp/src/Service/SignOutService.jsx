import React ,{useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import instance from "./AxiosService"

export default function SignOutService() {

    useEffect(() => {
        signOut();
      }, []);

      const signOut = () => {
        sessionStorage.removeItem('token');  
        instance.defaults.headers.common['Authorization'] = "";
        sessionStorage.removeItem('authenticatedUser');
      }

    return (
        <div>
            <Redirect to="/login" />
        </div>
    )
}
