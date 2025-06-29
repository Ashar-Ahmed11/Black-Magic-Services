import React from "react";
import CountUp from 'react-countup';
import asaanQarz1 from '../../Images/img7.jpg'
import asaanQarz2 from '../../Images/img8.jpg'

const WhyChooseAkhuwat = () => {
  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why Would You Want to Use Black Magic?
            </h2>
            <p>
Professor Amil Jalal Masih has a lot of experience with astrology and spiritual healing, so he can help you with your most difficult mental and spiritual problems. He is an expert on problems that have to do with love, such as Manpasand Shadi (desired marriage), Pasand Ki Shadi (love marriage), Mohabbat Ki Shadi, and Ex Love Back. He can also help with problems related to divorce, love conflicts, and Bandish Ka Tor (removing psychic blocks). He knows a lot about Kala Jadu Ka Tor (removing black magic), which has helped a lot of people keep themselves and their loved ones safe from bad energies. He helps people get peace, harmony, and happiness back in their lives by giving them personalized spiritual advice. 

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={asaanQarz1}
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 text-white p-4 rounded-bottom"
                    style={{ width: "100%",backgroundColor: "#c301ff"  }}
                  >
                    <p className="mb-0 text-center">HELP MARRIAGES</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={asaanQarz2}
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2010</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
