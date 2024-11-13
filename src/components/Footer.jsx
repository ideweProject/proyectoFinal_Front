import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center flex-column">
              <img
                className="w-75 ms-3"
                src="/images/img_pages/vibracowhite.png"
                alt=""
              />
             
            </div>
          </div>
        </div>

        <div>
          <p className="address mt-5">Martín García 2381 Montevideo, Uruguay</p>
         
        </div>

        <div className="footer-right d-flex flex-column align-items-center mt-5 me-start ">
          <p> contacto@vibraco.com.uy</p>
          <p>2402 78 73</p>
          <p> 092 989 271</p>
          <div className="social-media">
                <i className="bi bi-facebook mx-1 iconFacebook"></i>
                <i className="bi bi-whatsapp mx-1 iconWpp"></i>
                <i className="bi bi-twitter-x mx-1 iconTwitter"></i>
              </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
