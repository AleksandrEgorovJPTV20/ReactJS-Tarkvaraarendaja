import React from 'react';
import Proffession from '../data/proffession.json';

export default function ProffessionDetails() {
    return (
        <section id="about" className="about" style={{marginTop: "60px"}}>

        <div className="container" data-aos="fade-up" defaultActiveKey="1">
            <div className="row gx-0">

            {Proffession.map((data) => (
                <>
                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src={data.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center" eventKey={data.id} key={data.id} data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h3>Proffession</h3>
                            <h2>{data.proffession}</h2>
                            <p>
                                {data.description}
                            </p>
                            <p>
                                Information:<br/>
                                {data.language}<br/>
                                {data['study-form']}<br/>
                                {data.location}<br/>
                                {data['study-period']}<br/>
                                {data['study-level']}<br/>
                                {data.condition}<br/>
                                {data.admission}
                            </p>
                            <div className="text-center text-lg-start">
                                <a href="/register" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Register now</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
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