import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-left"><div className='d-flex flex-column align-items-start'> 
          <div className='d-flex align-items-center flex-column'>
          <img src="https://static.wixstatic.com/media/a9b61d_04587018d69b4fc399ce7690945bc9ff~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leaf.png" alt="" />
          <h4>VIBRACO</h4>
          <div className="social-media">
          <i class="bi bi-facebook mx-1 iconFacebook "></i>
          <i class="bi bi-whatsapp mx-1 iconWpp"></i>
          <i class="bi bi-twitter-x mx-1 iconTwitter"></i>
          </div>
          </div>
          
          </div>
       
       
         
         
        </div>

       
        <div >
        <p className="address">Martín García 2381
        Montevideo, Uruguay</p>
         
        </div>

       
        <div className="footer-right d-flex flex-column align-items-center ">
          <p> contacto@vibraco.com.uy</p>
          <p>2402 78 73</p>
          <p> 092 989 271</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
