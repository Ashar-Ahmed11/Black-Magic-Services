import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Footer({data}) {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Professor Amil Jalal Masih has been a spiritual healer for more than 30 years and is well-known for his work. specializing in issues with love</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  to="/">Home</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to="/">Services</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to="/contact-us">Contact Us</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} to="/about-us">About Us</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Get In Touch</h6>
                            <ul class="footer-links">
                                {/* <li onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  >Home</li> */}
                                <li>Phone: <a  href={`tel:+92-314-5167255`}>+92-314-5167255</a></li>
                                <li>Phone: <a  href={`tel:+92-332-9386158`}>+92-332-9386158</a></li>
                                <li>Landline: <a  href={`tel:+92-51-8736204`}>+92-51-8736204</a></li>
                                
                            </ul>
                        </div>
                        
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2025 All Rights Reserved by
                            </p>
                            <p class="copyright-text">Site developed by: <a target='_blank' href="https://metatech-official.co/">Metatech Official</a>
                                
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="facebook" to="/" target="blank"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="twitter" to="/"><i class="fa fa-twitter"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="dribbble" to="/"><i class="fa fa-dribbble"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="linkedin" to="/"><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}