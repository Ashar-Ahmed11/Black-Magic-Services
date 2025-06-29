import React from 'react'
import ContactUsCarousal from './contactuscarousal'
import carousalImage from '../Images/newAboutus.jpg'
// import Footer from './footer'
const AboutUs = () => {
    return (
        <div>
            <ContactUsCarousal upackage={"About Us"} image={carousalImage} />
            <div className="container my-5">
                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#c301ff" }}>Professor Amil Jalal Masih: A Name You Can Trust for Spiritual Healing</h2>
                {/* <p style={{ opacity: 0.8 }}><b style={{ color: "#BB332F" }}>e-Safar Travel & Tours</b> are one of the leading Tour Operators in Pakistan, providing comprehensive services for groups and individuals from and to the country. We provide you with the flexibility of purchasing a customized independent tour or a packaged group of departure, and service all of your travel & booking questions through our expert consultant staff at all international & domestic tourist attraction locations, all major cities including Northern Areas of Pakistan. Travel includes activities like international & domestic holiday tour programs for honeymoon couples, families, students, large groups, national & multinational companies, foreigners and Pakistan’s living abroad.</p> */}
                {/* <h2 className='my-4' style={{ fontFamily: 'Montserrat', fontWeight: "bold" }}>Contact Details</h2> */}
                <p>Professor Amil Jalal Masih is a well-known and respected spiritual doctor who has been doing his job for more than twenty years. He gives deep advice on how to deal with relationship problems, marital problems, and mental pain. His work is based on strong moral principles, honesty, and a real desire to help others. He has helped a huge number of people find inner peace, fall in love again, and build strong, lasting relationships over the years. Professor Amil Jalal Masih's caring approach has won him the trust of many people who want to get their personal lives in order and heal.

                </p>

                <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#c301ff" }}>Getting to Know Professor Amil Jalal Masih: Leading Hearts, Healing Lives     </h2>
                <p>
                Professor Amil Jalal Masih has been a committed spiritual leader for more than 20 years, helping people deal with the hardest parts of life. His kind nature and strong spiritual practices have helped thousands of people find peace and happiness, from healing emotional wounds to fixing problems in love and marriage. Professor Amil Jalal Masih is still a source of hope and change for people who are looking for answers and mending. He is known for being honest and deeply committed to helping others. 


                </p>
                {/* <h2 className='py-2' style={{ fontFamily: 'Montserrat', fontWeight: "bold", color: "#000a62" }}>Our Mission
                </h2>

                <p>
                When ME Enterprise was started, the founders were very clear that they wanted to put customers first and make car rentals more modern, customer-focused, and based on trust and openness. ME Enterprise brings quality and ease together by delivering carefully chosen cars with dependable drivers right to your door. "ME Enterprise Selection Tests" make sure that every car and driver meets the highest standards. This makes sure that safety and comfort are at the heart of every trip. This is how ME Enterprise really makes renting a car easy for everyone.


                </p> */}
                {/* <Footer /> */}

            </div >
        </div >
    )
}

export default AboutUs