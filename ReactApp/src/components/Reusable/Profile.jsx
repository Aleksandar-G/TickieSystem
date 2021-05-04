import instance from "../../Service/AxiosService";
import AdminProfile from "../Pages/AdminProfile";
import NormalProfile from "../Pages/NormalProfile";
import React, { Component } from "react";
import NavBar from "../Reusable/NavBar";

class Profile extends Component {
  constructor(props) {
    super();

    this.state = {
      role: String,
    };
  }

  componentDidMount() {
    instance
      .get(
        "http://localhost:8080/db/user/isadmin?username=" +
          sessionStorage.getItem("authenticatedUser")
      )
      .then((res) => this.setState({ role: res.data }));
  }

  render() {
    if (this.state.role == "admin") {
      return (
        <>
          <NavBar /> <AdminProfile />{" "}
        </>
      );
    } else {
      return (
        <>
          <NavBar /> <NormalProfile />{" "}
        </>
      );
    }
  }
}

export default Profile;
