import React from 'react';
import imageOne from '../../Images/img5.jpg'
import imageTwo from '../../Images/img6.jpg'

const AkhuwatImages3 = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="p-2 col-md-6  d-flex justify-content-center">
            <div className="position-relative">
              <img
                src={imageOne}
                alt="Hasina Bibi - Stitching Business"
                className="card-img-top rounded "

              />
              
            </div>
          </div>
  
        <div className="p-2 col-md-6  d-flex justify-content-center">
            <div className="position-relative">
              <img
                src={imageTwo}
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

export default AkhuwatImages3;