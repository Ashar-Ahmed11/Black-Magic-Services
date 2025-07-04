
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SuccessStory from './Components/successStory';
import AkhuwatLoanService from './Components/akhuwatLoanService';
import AkhuwatBussinessLoan from './Components/akhuwatBussinessLoan';
import AkhuwatHouseLoan from './Components/akhuwatHouseLoan';
import AboutUs from './Components/newaboutus';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import Disclaimer from './Components/Disclaimer';
import ContactUS from './Components/newcontactus';
import {

  Switch,
  Route,

} from "react-router-dom";

import AppContext from './Components/context/appContext';
import { useContext, useRef } from 'react'
import Admin from './Components/adminPanel/admin';
import Dashboard from './Components/adminPanel/dashboard';
import AllUsers from './Components/adminPanel/allUser';


function App() {
  const context = useContext(AppContext)
  const { siteData } = context
const color = "#c301ff"
 const whatsappRef = useRef();

  const handleTriggerWhatsApp = () => {
    whatsappRef.current?.click();
  };

  console.clear()

  return (

    <>
       <div>      <div className='whatsapp brand-image'>
        <p className='my-0 mx-2 pl-2 fw-bold' style={{ fontSize: "11px", width: '70px', textAlign: 'center', color: color }}>Black Magic Live Support</p>
        <a
          ref={whatsappRef}
          className='mx-3'
          target="_blank"
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/923472698189`}
          rel="noreferrer"
        >
          <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>


        <div className='phonenum brand-image'>
          <p className='m-0 fw-bold' style={{ fontSize: "11px", width: '55px', textAlign: 'center', color: color }}>Black Magic Office No.</p>
          {/* 923428347762 */}
          <a aria-label="Chat on WhatsApp" href={`tel:923472698189`}> <i style={{ color: '#0dc143' }} className="fa fa-phone-square" aria-hidden="true"></i> </a>
        </div>
      </div>
      {/* <div className="overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: color }}>
        <div className="d-flex headlineMove" style={{ fontWeight: 'bold', width: 'max-content' }}>
          <p className="p-2 m-0 text-white">
            Since 2001, Black Magic visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Black Magic Head Office No. {siteData&&siteData.phone}
          </p>
          <p className="p-2 m-0 text-white">
            Since 2001, Black Magic visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Black Magic Head Office No. {siteData&&siteData.phone}
          </p>
        </div>
      </div> */}

      {(window.location.pathname !== "/admin" && window.location.pathname !== "/admin-dashboard") && <Navbar />}

      <Switch>
        <Route exact path="/">
          <Home triggerWhatsApp={handleTriggerWhatsApp} />
        </Route>
        <Route exact path="/success-story">
          <SuccessStory />
        </Route>
        <Route exact path="/akhuwat-loan-service">
          <AkhuwatLoanService />
        </Route>
        <Route exact path="/akhuwat-bussiness-loan">
          <AkhuwatBussinessLoan />
        </Route>
        <Route exact path="/akhuwat-house-loan">
          <AkhuwatHouseLoan />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUS />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndCondition />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin-dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/all-users">
          <AllUsers />
        </Route>
      </Switch>
      {(window.location.pathname !== "/admin" && window.location.pathname !== "/admin-dashboard") && <Footer />}
    </>
  );
}

export default App;
