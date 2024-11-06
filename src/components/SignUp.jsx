import React from "react";
import "./signup.css";
function SignUp() {
  return (
    <div className="container  d-flex justify-content-center align-items-center vh-100 ">
      <div className="mainContainer">
        <h2 className="mb-4">Create your Vibra account</h2>
        <form className="w-100" style={{ maxWidth: "400px" }}>
          <div className="form-group mb-4">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email..."
            />
          </div>
          <div className="form-group mb-4">
            <label>Name:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
            />
          </div>
          <div className="form-group mb-4">
            <label>LastName:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
            />
          </div>

          <button type="submit" className="btn text-light bg-dark mb-3  w-100">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
