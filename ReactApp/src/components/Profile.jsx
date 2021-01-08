import instance from '../Service/AxiosService';
import AdminProfile from './AdminProfile';
import NormalProfile from './NormalProfile';
import React, { Component } from 'react';

class Profile extends Component {

  constructor(props) {
    super();

    this.state = {
      role: String
    };
  }

  componentDidMount() {
    instance.get("http://localhost:8080/db/user/isadmin?username=" + sessionStorage.getItem("authenticatedUser")).then((res) => this.setState({role:res.data}))
  }

  render() {

    if (this.state.role == "admin") {
      return <AdminProfile />
    }
    else {
      return <NormalProfile />
    }
  }
}

export default Profile;
