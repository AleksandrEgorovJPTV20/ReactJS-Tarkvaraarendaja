import React from 'react';
import FAQDATA1 from '../data/faq1.json';
import FAQDATA2 from '../data/faq2.json';
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ() {
    return (
      <section id="faq" className="faq">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <Accordion className="accordion accordion-flush" id="faqlist1">
            {FAQDATA1.map((data) => (
                  <>
                <Accordion.Item eventKey={data.id} key={data.id} className="accordion-item">
                  <Accordion.Header className="accordion-header">
                      {data.question}
                  </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                    {data.answer}
                    </Accordion.Body>
                </Accordion.Item>
                  </>
              ))}



            </Accordion>
          </div>

          <div className="col-lg-6">

            <Accordion className="accordion accordion-flush" id="faqlist2">

            {FAQDATA2.map((data) => (
                  <>
                <Accordion.Item eventKey={data.id} key={data.id} className="accordion-item">
                  <Accordion.Header className="accordion-header">
                    {data.question}
                  </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                    {data.answer}
                    </Accordion.Body>
                </Accordion.Item>
                  </>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
    )
}