import React from 'react'
import logo from './Logo.png'
import {
  Link
} from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="py-2 navbar p-3 navbar-expand-lg sticky-top " style={{ height: window.innerWidth>768&&'80px', backgroundColor: '#f7f8f9' }}>
        <div className=" container-fluid d-flex justify-content-between " >
          <Link className="navbar-brand me-3" to="/"><img className='' style={{ width: '60px' }} src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-2" id="navbarNav" style={{ backgroundColor: 'white', borderRadius: '8px'}}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5 fw-bold" to="/">Services</Link>
              </li>
              {/* <li className="nav-item dropdown mx-2">
                <Link
                  className="nav-link fs-5 fw-bold dropdown-toggle"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  Black Magic Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Love Marriage</Link></li>
                  <li><Link className="dropdown-item" to="/">Solve Relationship</Link></li>
                </ul>
              </li> */}

              <li className="nav-item mx-2">
                <Link className="nav-link fs-5 fw-bold" to="/">About Us</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5 fw-bold" to="/">Contact US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
