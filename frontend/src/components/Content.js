import React from 'react';

export default function Content() {
    return (
        <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We help build your programmer future</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Don't worry if something doesn't work. Practice makes perfect.</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start" style={{display: "flex", justifyContent: "center"}}>
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/hero-img.png" className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
    
      </section>
    
    )
}