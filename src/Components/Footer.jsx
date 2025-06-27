import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" text-white" style={{backgroundColor:'#4e4e4f'}}>
      <div className="container py-5">
        <div className="row">
          {/* Black Magic Services Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Black Magic Services</u>
            </h3>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolorem in quos dolores, cumque iusto beatae officia accusamus nostrum expedita eligendi quo. Iure fuga excepturi inventore qui assumenda distinctio in reiciendis perferendis, et ab dignissimos nostrum explicabo sint est laborum?
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Quick Links</u>
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Contact Us – Black Magic Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Success Story: Empowering Lives through Black Magic Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Welcome to Black Magic Services – Pakistan's Black Magic</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 ">
            <h3 className="mb-4 text-white fw-bold">
              <u>Newsletter</u>
            </h3>
            <p>
              Join us this month as we explore the latest 
              trends in health, technology, and lifestyle. 
              Discover valuable tips to enhance your well-
              being and make informed choices for a 
              smarter, more fulfilling life!
            </p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
              <button 
                className="btn btn-success" 
                type="button"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-dark py-3 text-white">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="small">
      © Copyright Black Magic Services. All rights reserved.
    </div>
    <div>
      <Link to="/" className="me-3 small text-white text-decoration-none">Disclaimer</Link>
      <Link to="/" className="me-3 small text-white text-decoration-none">Privacy Policy</Link>
      <Link to="/" className="small text-white text-decoration-none">Terms and Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;