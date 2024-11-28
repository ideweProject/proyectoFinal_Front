import React from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const handleSocialClick = () => {
    toast.warn("Función fuera del alcance de este proyecto", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center flex-column justify-content-center">
              <img
                className="w-75 "
                src={`${import.meta.env.VITE_SUPABASE_URL}/vibracowhite.png`}
                alt=""
              />
              <p className="ms-3"> &copy; Vibraco </p>
            </div>
          </div>
        </div>

        <div className="footer-right d-flex flex-column align-items-center mt-5 me-start ">
          <p>Martín García 2381 Montevideo, Uruguay</p>
          <p> contacto@vibraco.com.uy</p>
          <p>2402 78 73</p>
          <p> 092 989 271</p>
          <div className="social-media">
            <i
              onClick={handleSocialClick}
              className="bi bi-facebook mx-1 iconFacebook text-white"
            ></i>
            <i
              onClick={handleSocialClick}
              className="bi bi-whatsapp mx-1 iconWpp text-white"
            ></i>
            <i
              onClick={handleSocialClick}
              className="bi bi-twitter-x mx-1 iconTwitter text-white"
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
