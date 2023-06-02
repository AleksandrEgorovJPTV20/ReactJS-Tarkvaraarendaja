import React from 'react';
import Profession from '../data/profession.json';

export default function About() {
    return (
        <section id="about" className="about">

        <div className="container" data-aos="fade-up">
            <div className="row gx-0" defaultActiveKey="1">

            {Profession.map((data) => (
                <>
                    <div className="col-lg-6 d-flex flex-column justify-content-center" eventKey={data.id} key={data.id} data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h3>Proffession</h3>
                            <h2>{data.proffession}</h2>
                            <p>
                                {data.description}
                            </p>
                            <div className="text-center text-lg-start">
                                <a href="/programmer" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src={data.image} style={{width: "100%", height: "100%"}} className="img-fluid" alt="" />
                    </div>
                </>
                ))}

            </div>
        </div>

        </section>
    
    )
}