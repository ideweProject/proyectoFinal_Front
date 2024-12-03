import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users/store`,
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      },
    });

    return navigate("/login");
  };

  return (
    <>
      <div
        className=" login-background d-flex justify-content-center align-items-center  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
            import.meta.env.VITE_SUPABASE_URL
          }/vibraco-card02.jpg)`,
          backgroundPosition: "unset",
        }}
      >
        <div className=" login-container d-flex   align-items-center ">
          <div className="row g-0 shadow rounded  ">
            <div className="col-md-6  ">
              <div className=" login-box h-100 d-flex flex-column w-100 align-items-center  ">
                <Link to={"/"} className="mt-5">
                  <img
                    src={`${
                      import.meta.env.VITE_SUPABASE_URL
                    }/vibracowhite.png`}
                    alt=""
                  />
                </Link>

                <h1 className="image-title text-white d-md-flex d-none ">
                  Lo hacemos saludable
                </h1>
              </div>
            </div>

            <div className="col-md-6 bg-white form-column">
              <div className="d-flex flex-column p-5">
                <div>
                  <h2 className="title">Crea tu cuenta Vibra </h2>
                  <form
                    className="w-100 mt-4"
                    style={{ maxWidth: "400px" }}
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group mb-4">
                      <label className="text">Email</label>

                      <input
                        type="email"
                        className="form-control text"
                        {...register("email")}
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label className="text">Nombre</label>
                      <input
                        type="name"
                        className="form-control text"
                        {...register("firstname")}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text">Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("lastname")}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        {...register("password")}
                      />
                    </div>
                    <button
                      type="submit"
                      className="title btn text-light bg-dark mb-3  w-100"
                    >
                      Crear cuenta
                    </button>
                  </form>
                </div>
                <Link to={"/login"} className="text text-decoration-none">
                  <i className="bi bi-arrow-left fs-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
