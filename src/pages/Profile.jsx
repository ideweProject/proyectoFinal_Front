import React, { useState } from "react";

const Profile = () => {
  const [perfil, setPerfil] = useState({
    nombre: "María",
    apellido: "Pérez",
    email: "Mperez@gmail.com",
    pais: "Uruguay",
    direccion: "Bvar españa 2253",
    ciudad: "Montevideo",
    codigoPostal: "11500",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perfil actualizado:", perfil);
  };

  return (
    <div className="profile-container">
      <h1 className="d-flex justify-content-start">Perfil</h1>
      <hr />

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={perfil.nombre}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={perfil.apellido}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={perfil.email}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="pais">País</label>
          <select
            id="pais"
            name="pais"
            value={perfil.pais}
            onChange={handleChange}
            required
            className="inputStyle"
          >
            <option value="Uruguay">Uruguay</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Brasil">Brasil</option>
            <option value="México">México</option>
          </select>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={perfil.direccion}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={perfil.ciudad}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={perfil.codigoPostal}
            onChange={handleChange}
            required
            className="inputStyle"
          />
        </div>
        <hr />

        <div className="d-flex justify-content-end">
          <button type="submit" className="btnSubmit">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
