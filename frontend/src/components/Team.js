import React from 'react';
import TeamData from '../data/team.json';

export default function Reviews() {
    return (
        <section id="team" className="team">

        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Team</h2>
            <p>Our hard working team</p>
          </header>
  
          <div className="row gy-3" style={{justifyContent: "center"}}>
  
          {TeamData.map((data) => (
                        
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" eventKey={data.id} key={data.id}>
                        <div className="member">
                          <div className="member-img">
                            <img src={data.image} className="img-fluid" alt=""/>
                            <div className="social">
                              <a href=""><i className="bi bi-twitter"></i></a>
                              <a href=""><i className="bi bi-facebook"></i></a>
                              <a href=""><i className="bi bi-instagram"></i></a>
                              <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>{data.name}</h4>
                            <span>{data.role}</span>
                            <p>{data.description}</p>
                          </div>
                        </div>
                      </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    )
}