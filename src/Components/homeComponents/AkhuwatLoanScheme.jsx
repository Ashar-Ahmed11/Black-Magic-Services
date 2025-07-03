import React from 'react';
import asaanQarz3 from '../../Images/img4.jpg'

const AkhuwatLoanScheme = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">How to Handle Divorce with the Help of God</h1>

            <p className="mb-4 fw-bold mt-1">
              There is a support system at Divorce Solution that is easy to use and made for anyone going through a hard split. It helps people find peace of mind by giving them clear, caring steps based on spiritual understanding. The process is easy, doesn't take much work, and is meant to ease mental pain. People all over Pakistan trust this service to help them rebuild their lives with mental and emotional power.
            </p>

            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
                If you ever feel lost or stressed, anyone on the Divorce Solution team is ready to help. Their loving and helpful staff is always there to help you through every step of the way, making sure your journey is stress-free and full of hope.
              </p>
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <div className="position-relative">

              <img
                src={asaanQarz3}
                alt="Black Magic Services Loan Scheme Details in Urdu"
                className="card-img-top "
              // style={{height:"500px"}}
              />
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;