import React from "react";
import asaanQarz22 from '../../Images/weddingOne.jpg';

const AkhuwatLoanStatus = ({ triggerWhatsApp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    triggerWhatsApp?.(); // ⬅️ Just open WhatsApp
  };

  const color = "#c301ff";

  return (
    <div className="container py-5" id='loan-status'>
      <div className="row align-items-center justify-content-center">
        {/* Left column: Form */}
        <div className="col-md-6 mb-4">
          <div className="shadow rounded p-4 bg-white">
            <img
              src={asaanQarz22}
              style={{ height: "150px", objectFit: 'cover' }}
              alt="Asaan Qarz Loan Banner"
              className="card-img-top rounded mb-3"
            />
            <form onSubmit={handleSubmit}>
              <button type="submit" style={{ backgroundColor: color, color: "#ffffff" }} className="btn w-100 py-3">
                Proceed
              </button>
            </form>
          </div>
        </div>

        {/* Right column: Info */}
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-3">Reunite With Your Ex Love</h2>
          <p>
            Get back in touch with your ex today with strong spiritual help to bring back the love you lost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanStatus;
