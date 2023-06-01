import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function Registration() {
    return (
        <section id="about" className="about" style={{marginTop: "100px"}}>
            <div className="container" data-aos="fade-up">
                <div className="row gx-0" style={{display: "flex", justifyContent: "center"}}>
                        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <Form className="content" style={{textAlign: "center", margin: "auto", width: "70%"}} >
                                    <h3>Programmer</h3>
                                    <h2>Registration</h2>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="firstname" placeholder="Enter firstname" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="lastname" placeholder="Enter lastname"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="phone" placeholder="Enter phone"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="email" placeholder="Enter email"/>
                                    </Form.Group>
                                    <div className="text-center text-lg-start" style={{display: "flex", justifyContent: "center"}}>
                                        <Button variant="primary" type="submit" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">Register</Button>
                                    </div>
                                </Form>
                        </div>
                </div>
            </div>
        </section>
    )
}