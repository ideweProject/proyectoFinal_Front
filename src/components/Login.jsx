import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className=" login-background d-flex justify-content-center">
        <div className="login-container d-flex flex-column justify-content-center ">
          <div className="row g-0   ">
            <div className="col-md-6 ">
              <div className="login-box text-center h-100 w-100  ">
                <Link to={"/"}>
                  <img src="./images/img_pages/vibracowhite.png" alt="" />
                </Link>

                <h1 className="image-title text-white d-md-flex  d-none">
                  Lo hacemos saludable
                </h1>
              </div>
            </div>

            <div className="col-md-6 bg-white form-column ">
              <div className="d-flex flex-column p-5   ">
                <div>
                  <h2 className="title ">Bienvenido de nuevo ! </h2>
                  <form
                    className=" mt-4"
                    style={{ maxWidth: "400px" }}
                    onSubmit={handleSubmit}
                  >
                    <div className="text form-group mb-4">
                      <label className="text">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text">Contraseña</label>
                      <input
                        type="password"
                        className="form-control text text"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <div className="form-check-container mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="textform-check-input"
                          id="rememberMe"
                        />
                        <label
                          className="text form-check-label"
                          htmlFor="rememberMe"
                        >
                          Recuerdame
                        </label>
                      </div>

                      {/* <a
                        href="/forgot-password"
                        className="text text-decoration-none"
                      >
                        Olvidaste tu contraseña?
                      </a> */}
                    </div>

                    <button
                      type="submit"
                      className="btn text text-light bg-dark mb-3  w-100"
                    >
                      Iniciar sesión
                    </button>

                    <Link to={"/signin"} className="text text-decoration-none">
                      Crear cuenta
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
