import React, { useState, useEffect } from 'react';
import weddingOne from '../Images/weddingOne.jpg';
import exLove from '../Images/exLove.jpg';
import relationship from '../Images/relationship.jpg';
import recitation from '../Images/recitation.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Carousal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    window.addEventListener('resize', handleResize);

    // Initialize Bootstrap carousel manually to ensure mobile compatibility
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    if (myCarousel && window.bootstrap) {
      new window.bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel',
        pause: false,
      });
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const coverImages = [
    { url: weddingOne },
    { url: exLove },
    { url: relationship },
    { url: recitation },
  ];

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {coverImages.map((e, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div
                className="shade"
                style={{
                  zIndex: 20,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  pointerEvents: 'none',
                }}
              ></div>

              <div
                style={{
                  transform: 'translate3d(0,0,0)',
                  willChange: 'transform',
                  backgroundColor: '#000000',
                  paddingBottom: isMobile ? '133.3%' : '52.941%',
                }}
                className="d-block w-100 h-100 position-relative"
              >
                <img
                  style={{
                    top: 0,
                    objectFit: 'cover',
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                  }}
                  className="card-img-top position-absolute"
                  src={e.url}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay Caption and Animation */}
        <div
          className="carousel-caption h-100 d-flex align-items-center justify-content-start"
          style={{
            zIndex: 30,
            pointerEvents: isMobile ? 'auto' : 'none',
            left: '5%',
            textAlign: 'start',
          }}
        >
          <div className="text-start">
            <span
              className="text-light"
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bolder',
                fontSize: '35.2px',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Solve Love Problems',
                  2000,
                  'Online Istikhara',
                  2000,
                  'Black Magic Services',
                  2000,
                  'Kala Jaadu ka Tor',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <br />
            <span
              className="text-light mb-3"
              style={{ fontSize: '20.6px', display: 'block' }}
            >
              Consult Professor Amil Jalal Masih
            </span>

            <div
              className="row rounded-3 p-2 mt-3"
              style={{
                backgroundColor: 'white',
                width: 'max-content',
                pointerEvents: 'auto',
              }}
            >
              <div className="w-100 justify-content-center d-flex col-md-5 py-2">
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <div className="d-flex align-items-center px-2">
                    <i
                      style={{ fontSize: '30px', color: '#c301ff' }}
                      className="fa fa-phone-square px-3"
                      aria-hidden="true"
                    ></i>
                    <span style={{ color: 'black' }}>Contact Us</span>
                  </div>
                  <div className='px-3'>
                    <span>
                      <b>
                        <a
                          style={{ textDecoration: 'none', color: '#c301ff' }}
                          href="tel:0343-1165860"
                        >
                          0343-1165860
                        </a>
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
