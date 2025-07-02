import React from 'react';
import coupleOne from '../../Images/img3.jpg'
import coupleTwo from '../../Images/img4.jpg'

const AkhuwatImages2 = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="p-2 col-md-6  d-flex justify-content-center">
            <div className="position-relative">
              <img
                src={coupleOne}
                alt="Hasina Bibi - Stitching Business"
                className="card-img-top rounded "

              />
             
            </div>
          </div>
          <div className="p-2 col-md-6  d-flex justify-content-center ">
            <div className="position-relative">
              <img
                src={coupleTwo}
                alt="Hasina Bibi - Stitching Business"
                className="card-img-top rounded "

              />
             
            </div>
          </div>


        </div>
      </div>
    </div>

  );
};

export default AkhuwatImages2;