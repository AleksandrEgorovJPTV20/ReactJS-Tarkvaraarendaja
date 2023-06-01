import React from 'react';
import GalleryData from '../data/gallery.json';

export default function Gallery() {
    return (
        <section id="gallery" className="portfolio">

        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Programmer images</h2>
            <p>Gallery</p>
          </header>
  
          <div>
          </div>
          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200" defaultActiveKey="1">
          {GalleryData.map((data) => (
                <>
                        
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app" eventKey={data.id} key={data.id}>
                            <div className="portfolio-wrap">
                            <img src={data.image} style={{width: "100%", height: "100%"}} className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>{data.description}</h4>
                            </div>
                            </div>
                        </div>
                </>
                ))}
            </div>
        </div>
  
      </section>
    )
}