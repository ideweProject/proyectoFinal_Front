import React from "react";

function SignUp() {
  return (
    <>
      <div className="container  login-container d-flex flex-column justify-content-center">
        <div className="row g-0 h-75 shadow rounded">
          <div className="col-md-6  ">
            <div className=" login-image text-center h-100 w-100">
              <img src="./images/img_pages/vibracologowhite.webp" alt="" />
              <h1 className="image-title text-white h-100 d-md-flex d-none align-items-center justify-content-center">
                Lo hacemos saludable
              </h1>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column ms-5 p-3 h-75 mt-4  ">
              <div>
                <h2 className="title">Crea tu cuenta Vibra </h2>
                <form className="w-100 mt-4" style={{ maxWidth: "400px" }}>
                  <div className="form-group mb-4">
                    <label className="text">Email</label>

                    <input type="email" className="form-control text" />
                  </div>

                  <div className="form-group mb-4">
                    <label className="text">Nombre</label>
                    <input type="name" className="form-control text" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text">Apellido</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <button
                    type="submit"
                    className="title btn text-light bg-dark mb-3  w-100"
                  >
                    Crear cuenta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
