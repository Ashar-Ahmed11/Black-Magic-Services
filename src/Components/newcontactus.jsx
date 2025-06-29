import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from '../Images/newContactus.jpg'
// import Footer from './footer'
const ContactUs = ({data}) => {
    return (
        <div>
            <ContactUsCarousal upackage={"Contact Us"} image={carousalImage} />
            <div className="container my-5">
                {/* <h2 style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Us</h2> */}
                {/* <p style={{ opacity: 0.8 }}>{data.about}</p> */}
                <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#c301ff" }}>Contact Details</h2>
                <p><b>Need Help Right Away with Love, Marriage, or Relationship Problems?</b></p>
            <p>We will be here for you every step of the way to help and guide you.
</p>
<p><b> 📞 Call Us Right Now</b></p>
<p><b> 💬 Send Us a WhatsApp Message</b></p>
<p>Open 24 hours a day, seven days a week – We will always put your privacy first.</p>

                {/* <p><b>Phone Number:</b><a style={{ textDecoration: 'none',color:"#6699ff" }} href={`tel:0343-1165860`}> 0343-1165860</a></p> 
                 <p><b>Address:</b><a style={{ textDecoration: 'none',color:"#6699ff" }} > Liaqtabad B Area, Karachi</a></p> */}
                {/* <p><b>PTCL Number:</b> <a style={{ textDecoration: 'none' }} href="tel:+922134992200">021-34992200</a></p> */}
                {/* <p><b>Individual Email:</b><a style={{ textDecoration: 'none' }} href="mailto:mohamid@esafar.net"> mohamid@Esafar.net</a></p> */}


            </div>
            {/* <Footer /> */}

        </div>
    )
}

export default ContactUs