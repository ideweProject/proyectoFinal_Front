import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData, logOut } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { showCredentials } from "../redux/modalSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const previousPage = location.state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const show = useSelector((state) => state.modal);

  function closeModal() {
    dispatch(showCredentials());
  }

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
      url: `${import.meta.env.VITE_API_URL}/tokens/user`,
      data: { email, password },
    });

    if (!response.data.token) return setMsg(response.data);

    dispatch(
      saveUserData({ token: response.data.token, userId: response.data.userId })
    );

    navigate(previousPage ? previousPage : "/");
  };

  useEffect(() => {
    previousPage ? toast.error(location.state.msg) : null;
  }, []);

  async function handleRestartBd() {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/users/restart`,
    });

    toast.success("Base de datos reiniciada correctamente");
  }
  {
  }
  return (
    <>
      <div
        className=" login-background d-flex justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
            import.meta.env.VITE_SUPABASE_URL
          }/vibraco-card02.jpg)`,
          backgroundPosition: "unset",
        }}
      >
        <div className="login-container d-flex flex-column justify-content-center ">
          <div className="row g-0   ">
            <div className="col-md-6 ">
              <div className="login-box d-flex flex-column align-items-center justify-content-center h-100 w-100  ">
                <Link to={"/"}>
                  <img
                    src={`${
                      import.meta.env.VITE_SUPABASE_URL
                    }/vibracowhite.png`}
                    alt=""
                  />
                </Link>

                <h1 className="image-title text-center text-white d-md-flex d-none">
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
          <div className=" w-100 mt-3 d-flex justify-content-center">
            <Modal show={show} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title className="fw-bold title">
                  Usuario de prueba
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="text">
                  Para simplificar el acceso a la aplicación, se proporciona el
                  siguiente usuario de prueba:{" "}
                </p>
                <p className="fw-bold m-0 text">
                  Iniciar sesión como comprador
                </p>
                <ul className="list-credentials">
                  <li className="text">E-mail: customer@a.com.</li>
                  <li className="text">Contraseña: 1234.</li>
                </ul>
                <p className="fw-bold text">Reiniciar base de datos</p>

                <button
                  className="restartDb text text-white"
                  onClick={handleRestartBd}
                >
                  Reiniciar
                </button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
