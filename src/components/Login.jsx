import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: ``,
      data: { username, password },
    });
    console.log(response.data);
    dispatch(login(response.data));
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="mainContainer">
        <h2 className="mb-4">Login to your Vibra account</h2>
        <form
          className="w-100"
          style={{ maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-4">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email..."
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-check-container mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <a href="/forgot-password" className="text-decoration-none">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="btn text-light bg-dark mb-3  w-100">
            Login
          </button>
          <a href="/signin" className="text-decoration-none">
             Create an account
            </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
