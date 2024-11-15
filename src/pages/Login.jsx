import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUserData, logOut } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      url: `${import.meta.env.VITE_API_URL}/tokens`,
      data: { email, password },
    });

    if (!response.data.token) return setMsg(response.data);

    dispatch(
      saveUserData({ token: response.data.token, userId: response.data.userId })
    );
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
                  <h2 className="title ">Bienvenido de nuevo! </h2>
                  <form
                    className=" mt-4"
                    style={{ maxWidth: "400px" }}
                    onSubmit={handleSubmit}
                  >
                    <div className="text form-group mb-4">
                      <label className="text">Correo</label>
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
                      <div className="form-check p-0">
                        <input
                          type="checkbox"
                          className="textform-check-input"
                          id="rememberMe"
                        />
                        <label
                          className="text form-check-label ms-1"
                          htmlFor="rememberMe"
                        >
                          Recuérdame
                        </label>
                      </div>
                    </div>
                    <p className="text-danger">{msg}</p>

                    <button
                      type="submit"
                      className="btn text text-light bg-dark mb-3  w-100"
                    >
                      Iniciar sesión
                    </button>

                    <div>
                      <span>No tienes una cuenta?</span>
                      <Link
                        to={"/signin"}
                        className="text ms-1 text-decoration-none text-primary"
                      >
                        Crea una
                      </Link>
                    </div>
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
