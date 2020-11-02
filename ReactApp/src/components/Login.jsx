import React from 'react';


export default function Login() {

    return (
        <form className="mx-5 px-5">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
