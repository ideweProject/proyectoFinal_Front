import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveUserInfo } from "../redux/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const userInfo = useSelector((state) => state.user);
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    adress: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    async function getUserData() {
      {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/users/show/${userData.userId}`,
          headers: { Authorization: `Bearer ${userData.token}` },
        });

        setProfile({
          ...profile,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          password: response.data.password,
          adress: userInfo.adress,
          city: userInfo.city,
          postalCode: userInfo.postalCode,
        });
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    setProfile({
      ...profile,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      password: userInfo.password,
    });
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = profile;

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users/edit/${userData.userId}`,
      data: { firstname, lastname, email, password },
      headers: { Authorization: `Bearer ${userData.token}` },
    });

    dispatch(
      saveUserInfo({
        adress: profile.adress,
        city: profile.city,
        postalCode: profile.postalCode,
      })
    );
    toast.success(response.data);
  };

  return (
    <div className="profile-container container containerProfile w-50">
      <h1 className="text-center">Perfil</h1>
      <hr />
      <div className="d-flex justify-content-around">
        <form onSubmit={handleSubmit} className="">
          <div className="form-group">
            <label htmlFor="firstname">Nombre</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={profile.firstname}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={profile.lastname}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="adress">Dirección</label>
            <input
              type="text"
              id="adress"
              name="adress"
              value={profile.adress}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              value={profile.city}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="postalCode">Código Postal</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={profile.postalCode}
              onChange={handleChange}
              className="inputStyle w-100"
            />
          </div>
          <hr />

          <div className="d-flex justify-content-end">
            <button className="btnSubmit shadow">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
