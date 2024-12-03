import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveUserInfo } from "../redux/userSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users/edit/${userData.userId}`,
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      },
      headers: { Authorization: `Bearer ${userData.token}` },
    });

    dispatch(
      saveUserInfo({
        adress: data.address,
        city: data.city,
        postalCode: data.postalCode,
      })
    );
    toast.success(response.data);
  };

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

  return (
    <div className="profile-container container containerProfile w-50">
      <h1 className="text-center">Perfil</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-75">
          <div className="form-group">
            <label htmlFor="firstname">Nombre</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              defaultValue={profile.firstname}
              className="inputStyle w-100"
              {...register("firstname")}
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={profile.lastname}
              className="inputStyle w-100"
              {...register("lastname")}
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
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
              className="inputStyle w-100"
              {...register("password")}
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="adress">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={profile.adress}
              className="inputStyle w-100"
              {...register("address")}
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={profile.city}
              {...register("city")}
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
              {...register("postalCode")}
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
