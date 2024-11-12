import React from "react";
import { Link } from "react-router-dom";

function pruebaNav() {
  return (
    <div>
      <div class="btn-group dropleft">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="bi bi-person"></i>
        </button>
        <div class="dropdown-menu">
          <Link to={"/profile"} className=" text-decoration-none  p-1">
            Tu cuenta
          </Link>
          <Link to={"/orders"} className=" text-decoration-none  p-1">
            Tus pedidos
          </Link>
          <Link to={"/"} className=" text-decoration-none  p-1">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default pruebaNav;
